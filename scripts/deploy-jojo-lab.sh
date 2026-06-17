#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SSH_KEY="${JOJO_SSH_KEY:-/Users/nan.studio/Documents/cynadu-ssh.pem}"
SSH_HOST="${JOJO_SSH_HOST:-root@47.86.175.205}"
REMOTE_DIR="${JOJO_REMOTE_DIR:-/opt/jojo-lab}"
APP_VERSION="${JOJO_APP_VERSION:-1.0.1}"
BUILD_META_FILE="$ROOT_DIR/outputs/build-meta.json"

if [[ ! -f "$SSH_KEY" ]]; then
  echo "SSH key not found: $SSH_KEY" >&2
  echo "Set JOJO_SSH_KEY to your .pem path if it lives elsewhere." >&2
  exit 1
fi
if [[ ! "$APP_VERSION" =~ ^[A-Za-z0-9._+-]+$ ]]; then
  echo "Invalid JOJO_APP_VERSION: $APP_VERSION" >&2
  echo "Use a compact version such as 1.0.1." >&2
  exit 1
fi

SSH_CMD=(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=accept-new)
GIT_SHA="$(git -C "$ROOT_DIR" rev-parse HEAD 2>/dev/null || true)"
SHORT_SHA="$(git -C "$ROOT_DIR" rev-parse --short=12 HEAD 2>/dev/null || true)"
BUILT_AT="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"

cleanup_build_meta() {
  rm -f "$BUILD_META_FILE"
}
trap cleanup_build_meta EXIT

cat > "$BUILD_META_FILE" <<META
{
  "version": "$APP_VERSION",
  "buildId": "${SHORT_SHA:-local}",
  "gitSha": "$GIT_SHA",
  "shortSha": "$SHORT_SHA",
  "builtAt": "$BUILT_AT"
}
META

echo "Syncing Jojo LAB ${APP_VERSION}+${SHORT_SHA:-local} to ${SSH_HOST}:${REMOTE_DIR} ..."
tar czf - \
  --exclude='.git' \
  --exclude='work/private' \
  --exclude='_backup_old_phonics_20260614' \
  --exclude='.DS_Store' \
  --exclude='*.log' \
  -C "$ROOT_DIR" . | "${SSH_CMD[@]}" "$SSH_HOST" "mkdir -p '$REMOTE_DIR' && tar xzf - -C '$REMOTE_DIR'"

echo "Installing service/nginx configs if present ..."
"${SSH_CMD[@]}" "$SSH_HOST" bash -s <<'REMOTE'
set -euo pipefail
if [[ -f /opt/jojo-lab/deploy/jojo-lab.service ]]; then
  cp /opt/jojo-lab/deploy/jojo-lab.service /etc/systemd/system/jojo-lab.service
  systemctl daemon-reload
  systemctl enable jojo-lab
fi
if [[ -f /opt/jojo-lab/deploy/jojo-lab.nginx.conf ]]; then
  cp /opt/jojo-lab/deploy/jojo-lab.nginx.conf /etc/nginx/conf.d/jojo-lab.conf
fi
mkdir -p /opt/jojo-lab/work/private
chmod 700 /opt/jojo-lab/work/private
systemctl restart jojo-lab
nginx -t
systemctl reload nginx
systemctl --no-pager --full status jojo-lab | sed -n '1,12p'
REMOTE

echo "Done. Open https://lab.jojo1222.com/"

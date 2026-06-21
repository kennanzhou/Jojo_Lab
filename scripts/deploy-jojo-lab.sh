#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
LOCAL_ENV="$SCRIPT_DIR/deploy.local.env"

if [[ -f "$LOCAL_ENV" ]]; then
  # shellcheck disable=SC1090
  source "$LOCAL_ENV"
fi

SSH_HOST="${JOJO_SSH_HOST:-root@47.86.175.205}"
REMOTE_DIR="${JOJO_REMOTE_DIR:-/opt/jojo-lab}"
APP_VERSION="${JOJO_APP_VERSION:-1.0.4}"
BUILD_META_FILE="$ROOT_DIR/outputs/build-meta.json"

resolve_ssh_key() {
  if [[ -n "${JOJO_SSH_KEY:-}" && -f "${JOJO_SSH_KEY}" ]]; then
    printf '%s' "$JOJO_SSH_KEY"
    return 0
  fi
  local candidate
  for candidate in \
    "$ROOT_DIR/../.ssh/cynadu-ssh.pem" \
    "$HOME/.ssh/cynadu-ssh.pem"; do
    if [[ -f "$candidate" ]]; then
      printf '%s' "$candidate"
      return 0
    fi
  done
  return 1
}

if ! SSH_KEY="$(resolve_ssh_key)"; then
  echo "SSH key not found." >&2
  echo "Create scripts/deploy.local.env from scripts/deploy.local.env.example" >&2
  echo "and set JOJO_SSH_KEY to your .pem path." >&2
  echo "Tried:" >&2
  echo "  scripts/deploy.local.env -> JOJO_SSH_KEY" >&2
  echo "  $ROOT_DIR/../.ssh/cynadu-ssh.pem" >&2
  echo "  $HOME/.ssh/cynadu-ssh.pem" >&2
  exit 1
fi
if [[ ! "$APP_VERSION" =~ ^[A-Za-z0-9._+-]+$ ]]; then
  echo "Invalid JOJO_APP_VERSION: $APP_VERSION" >&2
  echo "Use a compact version such as 1.0.4." >&2
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
  --exclude='scripts/deploy.local.env' \
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

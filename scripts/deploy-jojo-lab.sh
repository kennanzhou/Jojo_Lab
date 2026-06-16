#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SSH_KEY="${JOJO_SSH_KEY:-$ROOT_DIR/../.ssh/cynadu-ssh.pem}"
SSH_HOST="${JOJO_SSH_HOST:-root@47.86.175.205}"
REMOTE_DIR="${JOJO_REMOTE_DIR:-/opt/jojo-lab}"

if [[ ! -f "$SSH_KEY" ]]; then
  echo "SSH key not found: $SSH_KEY" >&2
  echo "Set JOJO_SSH_KEY to your .pem path if it lives elsewhere." >&2
  exit 1
fi

SSH_CMD=(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=accept-new)

echo "Syncing Jojo LAB to ${SSH_HOST}:${REMOTE_DIR} ..."
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

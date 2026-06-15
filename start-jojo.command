#!/bin/zsh
cd "$(dirname "$0")"
echo "Starting Jojo LAB local service..."
echo "URL: http://127.0.0.1:4173/"
echo
node server.js

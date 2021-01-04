#!/bin/sh
mkdir -p dist/client
esbuild src/client.jsx --outdir=dist/client \
  --bundle \
  --splitting \
  --minify \
  --sourcemap \
  --format=esm

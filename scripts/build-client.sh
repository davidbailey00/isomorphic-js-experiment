#!/bin/sh
esbuild src/client.jsx --outdir=dist/client \
  --bundle \
  --splitting \
  --minify \
  --sourcemap \
  --format=esm

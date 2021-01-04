#!/bin/sh
mkdir -p dist/server
sucrase src -d dist/server \
  --transforms imports,jsx \
  --jsx-pragma h \
  --jsx-fragment-pragma Fragment

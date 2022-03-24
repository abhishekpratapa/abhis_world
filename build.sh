#!/usr/bin/env bash

yarn build
cp docs/CNAME build/
rm -rf docs
mv build/ docs
cp docs/index.html docs/404.html

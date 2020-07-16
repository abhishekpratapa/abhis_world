#!/usr/bin/env bash

yarn build
cp docs/CNAME build/
rm -rf docs
mv build/ docs

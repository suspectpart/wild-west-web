#!/bin/bash
cp -r /var/source /tmp/source
cd /tmp/source
npm install
npm run build
rm -rf /var/source/dist/*
cp -r dist/ /var/source
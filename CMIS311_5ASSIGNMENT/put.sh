#!/usr/bin/env bash -x
echo "Commit message -> :"
read message

git add .
git commit -m "$message"
git push origin main


#!/usr/bin/env bash

npm run build

npm i -D firebase-tools

npx firebase login

npx firebase init

npx firebase deploy

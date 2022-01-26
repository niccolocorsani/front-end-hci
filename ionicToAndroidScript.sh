#! /bin/bash



ng build || npm install @ionic-native/core --save # || esegue il secondo comando se il primo ha dato errore
ng build
npm install @capacitor/core
npm install --save --legacy-peer-deps
npm install @ionic-native/core --save
ionic capacitor add android
npm install jetifier
npx jetify
npx cap sync android
npx cap init
ionic capacitor copy android
ionic cap open android


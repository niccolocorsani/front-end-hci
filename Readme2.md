
-Eseguire il comando sotto per

ionic capacitor add android

-Eseguire il comando non so perchè

ng build 

-Eseguire il comando

ionic capacitor copy android

-Eseguire il comando

ionic cap open android

Se da problemi con gradle (ad esempio javahome not found), fare:
rm -rf ~/.gradle

e ribuildare il progetto





////////// Dipendenze installate a mano


Ricordare che  prima di ionic serve va fatto

npm install cordova-plugin-local-notification
npm install @ionic-native/local-notifications


Se no darà errore che mancano delle dipendenze per localnotification


npm i cordova-plugin-device
npm i cordova-plugin-badge



//// Per risolve traduzione da ionic a android (mancanza di dipendenze in android)
npm install jetifier
npx jetify
npx cap sync android

////
se ci sono altri problemi: eliminare la cartella android e fare il procedimento da capo


///// Ionic calendar
Fatto questo a mano, ricontrollare
npm i ionic2-calendar
ionic g page pages/calModal
https://www.youtube.com/watch?v=_hVdPEmbwA0
Per creare nuovi componenti andare sulla cartella dove creare il componente e fare:
ng generate component calendar



Scenarios negli usability test.
Interrogare altri clienti per trovare eventuali altre festures con needfinding.
Gestisci notifiche è importante quanto gli altri use case



npx depcheck   per vedere le dipendenze non usate

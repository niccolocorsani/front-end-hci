


# Overview

- **Academic Year**: 2021-2022
- **Project Title**: Client consultant interaction application
- **Students**: Niccolò Corsani
- **CFUs**: 9

The Project concerns the development of a web application for the management, saving and manipulation of different types of data useful for the interaction between generic customers and consultants. In particular, the functions made available by the application are those of: saving data that identify a customer and a consultant, booking an appointment between them and displaying the consultants' position on a map.

# Tools and Techniques

The main tools and techniques we will employ are:

- **Angular**: For front-end implementation \[1\].
- **Ionic**: For the support of the front-end implementation \[2\].
- **Spring-Boot**: For back-end implementation \[3\].
- **MySQL**: For the persistence of data and query manipulation \[4\].
- **Docker**: For the deploy of the back-end \[5\].
- **Capacitor Android**: For cross-platform development \[6\].


...


# Project Documents

Di seguito il report finale e presentazione, oltre che qualche gif annimata per illustrare alcuni esempi delle possibili interazioni con l'interfaccia grafica. 

Some Client features:



![123](https://user-images.githubusercontent.com/79635059/153195959-f6761ac7-0aa6-4ac5-a26d-159ac1c8c9b7.gif)


Some Consultant features:



![123](https://user-images.githubusercontent.com/79635059/153251350-3c412134-565f-4d8b-8b87-22009bf377f1.gif)


Flow to schedule a notification:



![prova](https://user-images.githubusercontent.com/79635059/153254230-93f51ab0-f132-4d5a-91f5-7b6a259f39e1.gif)



*Put links here to the **final report** and **presentation** for the project when finished.*

# Instructuions to execute system




Per eseguire il Front-end fare il clone del progetto e successivamente eseguire il comando:

```
 npm i --legacy-peer-deps
 ```
 per installare le dipendenze.

Dal momento che vi è un riferimento alle API di Google e che il dominio registrato in google-dev-console è http://localhost:8100, risulta importante collegarsi a tale indirizzo facendo attenzione che la porta sia effettivamente 8100. Con il comando 
```
ionic serve
```
la connessione sarà di default orientata a tale porta.
Per ottenere i servizi presenti nel back-end è necessario inizializzare due container attraverso Docker. I due container (Spring-app e MySQL engine) possono essere inizializzati eseguendo il comando da terminale: 
```
docker-compose up
```

all'interno del progetto dove è presente il file target "docker-compose.yml".

Ultima nota riguarda le push-notification: infatti è necessario, affinchè sia possibile ricevere tali notifiche, specificare nel sistema operativo il consenso a ricevere notifiche push. In particolare, sarà necessario dare il consenso all'applicazione Chrome.


# Bibliography

1.	Geolocation: https://angular-maps.com/
2.	Rest API: https://angular.io/guide/http, https://medium.com/letsboot/translate-angular-4-apps-with-ngx-translate-83302fb6c10d
3.	Push-Notification service OneSignal: https://onesignal.com/blog/how-to-integrate-push-notifications-in-angular/
4.	Social Authentication: https://www.npmjs.com/package/angularx-social-login
5.	Social sharing content: https://stackblitz.com/edit/social-sharing?file=src%2Fapp%2Fshare-button%2Fshare-button.component.html
6.	Tooltip: https://github.com/zyra/ionic-tooltips
![image](https://user-images.githubusercontent.com/79635059/153487752-cb6de48a-38b1-4c36-9535-bf79cd9de768.png)




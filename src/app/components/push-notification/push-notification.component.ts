import { Component, OnInit } from '@angular/core';
import {OneSignal} from 'onesignal-ngx';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.scss'],
})
export class PushNotificationComponent implements OnInit {


  // https://www.youtube.com/watch?v=31ozmzVv-KI

  // ricordarsi che su chrome o mac impostazioni vanno consentite le notifiche push

  title = 'OneSignal-Angular';

  constructor(private oneSignal: OneSignal) {
    this.oneSignal.init({
      appId: "206e4ddb-a9f7-4d03-a059-ae34ed5cdf00",
    });
  }
  ngOnInit() {
  }
  fun() {
    this.oneSignal.sendTag("tech","oooooo").then(()=>{console.log("sent tag....")})
  }
}

/*
{
  "app_id": "206e4ddb-a9f7-4d03-a059-ae34ed5cdf00",
  "included_segments": [
    "Subscribed Users"
  ],
  "data": {
    "foo": "bar"
  },
  "contents": {
    "en": "Sampple Push Message"
  }
}

Header
Authorization: Basic MjJlOWZjOGMtZjhhOC00OThkLWE1ODctNzQ3N2QxMDFlOGY4
Content-Type: application/json



https://www.postman.com/onesignaldevs/workspace/onesignal-api/documentation/16845437-2783b546-3051-4ef5-96b3-ab8403c94a1b
*/


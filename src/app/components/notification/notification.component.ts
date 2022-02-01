import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent  {

  constructor(private localNotifications: LocalNotifications) { }

//https://ionicframework.com/docs/native/local-notifications
//Per far funzionare il tutto qui sotto è stato aggiunto:
//providers: [..., LocalNotifications]
  funzioneNotifiche(): void {
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      //sound: 'file://sound.mp3',
      trigger: {at: new Date(new Date().getTime() + 10)},
      led: 'FF0000',
    });
  }

  activeNotification() {
    this.funzioneNotifiche();
  }
}

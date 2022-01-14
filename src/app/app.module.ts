import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {OpenModal} from './components/select-appointmnent-with-modal/open-modal';
import {LogInOrRegisterMenuComponent} from './components/log-in-or-register-menu/log-in-or-register-menu.component';
import {LogInComponent} from './components/log-in-or-register-menu/log-in/log-in.component';
import {MyInputComponent} from './components/my-input/my-input.component';
import {RegisterComponent} from './components/log-in-or-register-menu/register/register.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { NotificationComponent } from './components/notification/notification.component';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { NgCalendarModule  } from 'ionic2-calendar';
import {CalModalPageModule} from "./components/my-calendar-with-modal/cal-modal/cal-modal.module";
import {FormsModule} from "@angular/forms";
import {MyCalendarComponent} from "./components/my-calendar-with-modal/my-calendar.component";
import {ClientComponent} from "./layout/client/client.component";
import {BusinessConsultantComponent} from "./layout/business-consultant/business-consultant.component";
import {SelectUsersModalComponent} from "./components/select-appointmnent-with-modal/select-users-modal/select-users-modal.component";
import {ShowUsersComponent} from "./components/show-users/show-users.component";
import {GeolocationComponent} from "./components/geolocation/geolocation.component";
import {GoogleMapsModule} from "@angular/google-maps";
import {AgmCoreModule} from "@agm/core";

@NgModule({
    declarations: [
        AppComponent,
        OpenModal,
        LogInOrRegisterMenuComponent,
        LogInComponent,
        MyInputComponent,
        RegisterComponent,
        NotificationComponent,
        MyCalendarComponent,
        ClientComponent,
        BusinessConsultantComponent,
        SelectUsersModalComponent,
        ShowUsersComponent,
        GeolocationComponent
    ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgCalendarModule, CalModalPageModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'key=AIzaSyCrl5bxS7fNnPW5o5K9x7IeqXH-lS3gnLw'
    }),
    // https://medium.com/letsboot/translate-angular-4-apps-with-ngx-translate-83302fb6c10d
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }), FormsModule, GoogleMapsModule],
  ////https://www.youtube.com/watch?v=FLHi2pc8gX0 spiegazione LocalNotifications
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},LocalNotifications, AppComponent, MyCalendarComponent],
  bootstrap: [AppComponent],

})
export class AppModule {
}


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


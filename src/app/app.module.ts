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
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import {NgCalendarModule} from 'ionic2-calendar';
import {CalModalPageModule} from "./components/my-calendar-with-modal/cal-modal/cal-modal.module";
import {FormsModule} from "@angular/forms";
import {MyCalendarComponent} from "./components/my-calendar-with-modal/my-calendar.component";
import {ClientComponent} from "./layout/client/client.component";
import {BusinessConsultantComponent} from "./layout/business-consultant/business-consultant.component";
import {SelectUsersModalComponent} from "./components/select-appointmnent-with-modal/select-users-modal/select-users-modal.component";
import {ShowUsersComponent} from "./components/show-users/show-users.component";
import {GeolocationComponent} from "./components/geolocation/geolocation.component";
import {AgmCoreModule} from "@agm/core";
import {SocialSharingComponent} from "./components/social-sharing/social-sharing.component";
import {SocialLoginModule, SocialAuthServiceConfig} from 'angularx-social-login';
import {GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import {SocialLogInComponent} from "./components/social-log-in/social-log-in.component";
import {SocialRegisterComponent} from "./components/social-register/social-register.component";
import {TooltipsModule} from "ionic-tooltips";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PushNotificationComponent} from "./components/push-notification/push-notification.component";


@NgModule({
    declarations: [
        AppComponent,
        OpenModal,
        LogInOrRegisterMenuComponent,
        LogInComponent,
        MyInputComponent,
        RegisterComponent,
        MyCalendarComponent,
        ClientComponent,
        BusinessConsultantComponent,
        SelectUsersModalComponent,
        ShowUsersComponent,
        GeolocationComponent,
        SocialSharingComponent,
        SocialLogInComponent,
        SocialRegisterComponent,
        PushNotificationComponent


    ],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgCalendarModule, CalModalPageModule,
        HttpClientModule, SocialLoginModule, TooltipsModule.forRoot(), BrowserAnimationsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCrl5bxS7fNnPW5o5K9x7IeqXH-lS3gnLw'
        }),
        // https://medium.com/letsboot/translate-angular-4-apps-with-ngx-translate-83302fb6c10d
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }), FormsModule],
    // https://www.youtube.com/watch?v=FLHi2pc8gX0 spiegazione LocalNotifications
    providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, LocalNotifications, AppComponent,
        MyCalendarComponent,
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '262434699082-bnq5dgk6bdrb8g95vs56u82800s1at3e.apps.googleusercontent.com'
                        )
                    },
                    {
                        id: FacebookLoginProvider.PROVIDER_ID,
                        provider: new FacebookLoginProvider('1543052669422518')
                    }
                ]
            } as SocialAuthServiceConfig,
        }
    ],
    bootstrap: [AppComponent],
    exports: [
        PushNotificationComponent
    ]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}


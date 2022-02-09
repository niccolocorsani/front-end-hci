import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class PushNotificationServiceService {


    private url = 'https://onesignal.com/api/v1/notifications';

    header = new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Basic MjJlOWZjOGMtZjhhOC00OThkLWE1ODctNzQ3N2QxMDFlOGY4"
    });

    myObserver = {
        next: (value: any) => console.log(value),
        error: (err: any) => alert('Observer got an error: ' + err + '..'),
    };

    constructor(public http: HttpClient) {}

    public async postNotification(pushId: string, date: string) {


        const requestOptions = {headers: this.header};

    alert(pushId)

        this.http.post<Object>(this.url, {
            "app_id": "206e4ddb-a9f7-4d03-a059-ae34ed5cdf00",
            "include_player_ids": [pushId],
            "contents": {
                "en": "Sampple Push Message"
            }
        }, requestOptions)
            .subscribe(this.myObserver); ////sembra che senza sto subscribe non sia in grado di fare la richiesta
    }
}

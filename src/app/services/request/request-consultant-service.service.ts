import {Injectable} from '@angular/core';
import {ClientResponse} from "../response/client-response";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable, Subject, throwError} from "rxjs";
import {ConsultantResponse} from "../response/consultant-response";

@Injectable({
  providedIn: 'root'
})
export class RequestConsultantServiceService {


  private url = 'http://localhost:8080/spring-app';
  private listElements: Array<ConsultantResponse> = [];
  public editDataDetails: any = [];
  public subject = new Subject<any>();
  private events = new BehaviorSubject(this.editDataDetails);
  currentMessage = this.events.asObservable();

  async updateAppointments(userName: any) {
    let consultants = this.getConsultantList();
    await this.delay(500);
    let idConsultant;
    var events = [];
    alert("selezionato consulente " + userName)
    console.log(consultants)
    let consultant: any;

    consultants.forEach(value => {
      console.log(value.userName)
      if (value.userName == userName) consultant = value;

    });
    let appointments = consultant.appointments;


    let appointment = consultant.appointments[0]


    var startTime;
    var endTime;


    let splitDate = appointment.date.split("-");
    let splitStartTime = appointment.startTime.split(":");
    let splitEndTime = appointment.endTime.split(":");

    console.log(splitDate)
    console.log(splitStartTime)
    console.log(splitEndTime)

    startTime = new Date(
      splitDate[0],
      splitDate[1]-1,
      splitDate[2],
      splitStartTime[0],
      splitStartTime[1],
      splitStartTime[2],
    );

    endTime = new Date(
      splitDate[0],
      splitDate[1]-1,
      splitDate[2],
      splitEndTime[0],
      splitEndTime[1],
      splitEndTime[2],
    );

    events.push({
      title: 'Event - ' + 1,
      startTime: startTime,
      endTime: endTime,
      allDay: false,
    });

    console.log(events)
    this.events.next(events)

  }

  constructor(public http: HttpClient) {
  }

  myObserver = {
    error: (err: any) => alert('Observer got an error: ' + err), // in caso di errori (di vario genere)
  };

  public getConsultantById(id: any) {
    let observable = this.http.get<any>(this.url + '/consultant/' + id).subscribe(data => {
        next: (value: any) => alert("ricevuto consulente con id " + value.id + "e appuntamenti " + value.appointments[0].getStartTime())
      },
      error => {
        alert('messaggio di errore' + error.message);
      });
  }

  public putConsultant(userName: string): any {
    let body = new ConsultantResponse();
    body.userName = userName;
    ////Importante mettere il sp
    this.http.put<ConsultantResponse>(this.url + '/consultant/putConsultant', body).pipe(
      // catchError(this.handleError)
    ).subscribe(this.myObserver); ////sembra che senza sto subscribe non sia in grado di fare la richiesta
    return;
  }

  public getConsultantList(): any {
    //// metodo asicnrono
    this.listElements.splice(0, this.listElements.length);
    this.http.get<any>(this.url + '/consultant/api/consultants').pipe(
      // delay(1000),
      map((data: any) => {
        // @ts-ignore
        data.forEach(element => {
          this.listElements.push(new ConsultantResponse(element));
          let response = new ConsultantResponse(element);
        });
        return this.listElements;
      })).subscribe(this.myObserver);

    return this.listElements;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A consultant-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}

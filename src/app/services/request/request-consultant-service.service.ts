import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {BehaviorSubject, throwError} from "rxjs";
import {ConsultantResponse} from "../response/consultant-response";

@Injectable({
  providedIn: 'root'
})
export class RequestConsultantServiceService {


  private url = 'http://localhost:8080/spring-app';
  private listElements: Array<ConsultantResponse> = [];
  public editDataDetails: any = [];
  private events = new BehaviorSubject(this.editDataDetails);
  private currentSelectedConsultant: ConsultantResponse;
  public loggedConsultant: ConsultantResponse;

  currentMessage = this.events.asObservable();

  constructor(public http: HttpClient) {
  }


  async updateAppointments(id: any) {
    this.getConsultantById(id);
    await this.delay(500);
    let consultant = this.currentSelectedConsultant;
    let events = [];
    console.log(consultant)
    let i = 0;
    consultant.appointments.forEach(element =>{
      let appointment = consultant.appointments[i++]
      let startTime;
      let endTime;
      let splitDate = appointment.date.split("-");
      let splitStartTime = appointment.startTime.split(":");
      let splitEndTime = appointment.endTime.split(":");
      console.log(splitDate,splitStartTime,splitEndTime)
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
     });
  }

  myObserver = {
    next: (value: any) =>  this.currentSelectedConsultant = value,
    error: (err: any) => alert('Observer got an error: ' + err.error + " " + err.response)
  };

  public getConsultantById(id: any): any {
    this.http.get<any>(this.url + '/consultant/' + id).pipe(
      catchError(this.handleError)
    ).subscribe(this.myObserver);
    return this.currentSelectedConsultant ;
  }

  public putConsultant(userName: string): any {
    let body = new ConsultantResponse();
    body.userName = userName;
    this.http.put<ConsultantResponse>(this.url + '/consultant/putConsultant', body).pipe(
      catchError(this.handleError)
    ).subscribe(this.myObserver); ////sembra che senza sto subscribe non sia in grado di fare la richiesta
    return;
  }

  public getConsultantList(): any {
    //// metodo asicnrono
    alert("Retrive consultant list")
    this.listElements.splice(0, this.listElements.length);
    this.http.get<any>(this.url + '/consultant/api/consultants').pipe(
      // delay(1000),
      map((data: any) => {
        data.forEach(element => {
          this.listElements.push(new ConsultantResponse(element));
        });
        return this.listElements;
      })).subscribe({
      next: (value: any) =>  console.log('Observer got value:'+value),
      error: (err: any) => alert('Observer got an error: ' + err.error + " " + err.response)
    });
    return this.listElements;
  }

  public viewLoggedUserAppointments(){
    this.updateAppointments(this.loggedConsultant.id);
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

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

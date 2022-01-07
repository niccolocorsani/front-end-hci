import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, delay, map} from "rxjs/operators";
import {throwError} from "rxjs";
import {ClientResponse} from "../response/client-response";
import {ConsultantResponse} from "../response/consultant-response";
import {AppointmentResponse} from "../response/appointment-response";

@Injectable({
  providedIn: 'root'
})
export class RequestClientServiceService {

  ////ricordarsi che nelle chiamate al backend va sempre gestita l'asincronia delle risposte fornite

  private url = 'http://localhost:8080/spring-app';
  listElements: Array<ClientResponse> = [];
  currentSelectedClient: ClientResponse;

  constructor(public http: HttpClient) {
  }

  myObserver = {
    next: (value: any) => {
      this.currentSelectedClient = value;
      console.log(value)
    },
    error: (err: any) => alert('Observer got an error: ' + err + '..'),
  };


  public putClient(userName: string): any {
    let body = new ClientResponse();
    body.userName = userName;
    body.firstName = "qualcosa"; //TODO da tenere temporaneamente perchè  nel backend c è un controllo su questo campo: Javax Validation e quindi da errore se non lo metto
    console.log(body)
    this.http.put<ClientResponse>(this.url + '/client/putClient', body).pipe(
      catchError(this.handleError)
    ).subscribe(this.myObserver); ////sembra che senza sto subscribe non sia in grado di fare la richiesta
  }

  public async updateClientAppoitnment(userName: string, appointment: AppointmentResponse) {
    let client = new ClientResponse();
    console.log(userName)
    this.getClientList();
    await this.delay(500);
    this.listElements.forEach(element => {
        console.log("found" + element.userName)
        if (element.userName === userName) {
          client = element;
        }
      }
    );
    client.appointments.push(appointment);
    this.http.put<ClientResponse>(this.url + '/client/updateClient', client).pipe(
      catchError(this.handleError)
    ).subscribe(this.myObserver);
  }

  public getClientList(): any {
    this.listElements.splice(0, this.listElements.length);
    this.http.get<any>(this.url + '/client/api/clients').pipe(
      map((data: any) => {
        data.forEach(element => {
          this.listElements.push(new ClientResponse(element));
        });
        return this.listElements;
      })).subscribe(this.myObserver);
    return this.listElements;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
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

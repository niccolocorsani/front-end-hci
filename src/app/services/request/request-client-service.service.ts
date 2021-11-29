import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";
import {ClientResponse} from "../response/client-response";

@Injectable({
  providedIn: 'root'
})
export class RequestClientServiceService {

  private url = 'http://localhost:8080/spring-app';
  private listElements: Array<ClientResponse> = [];

  myObserver = {
    error: (err: any) => alert('Observer got an error: ' + err),
  };

  constructor(public http: HttpClient) {
  }


  public putClient(userName: string): any {
    let body = new ClientResponse();
    body.firstName = userName;
    this.http.put<ClientResponse>(this.url + '/client/putClient', body).pipe(
      catchError(this.handleError)
    ).subscribe(this.myObserver); ////sembra che senza sto subscribe non sia in grado di fare la richiesta
    return;
  }

  public getClientList(): any {
    //// metodo asicnrono
    this.listElements.splice(0, this.listElements.length);
    this.http.get<any>(this.url + '/client/api/clients').pipe(
      // delay(1000),
      map((data: any) => {
        // @ts-ignore
        data.forEach(element => {
          this.listElements.push(new ClientResponse(element));
          let response = new ClientResponse(element);
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

}

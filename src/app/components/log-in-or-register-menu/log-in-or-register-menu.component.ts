import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {UserResponse} from '../../services/response/user-response'
import {RequestUserServiceService} from '../../services/request/request-user-service.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-log-in-or-register-menu',
  templateUrl: './log-in-or-register-menu.component.html',
})
export class LogInOrRegisterMenuComponent implements OnInit {


  @Input() collapsedLogIn = false;
  @Input() collapsedRegister = false;
  @Output() close = new EventEmitter<any>();    ///// Può essere applicato solo al padre nel

  // tag in cui è presente <app-log-in-or-register-menu>

  private listElements: Array<UserResponse> = [];
  // @ts-ignore
  userResponse: UserResponse;
  private httpOptions = {
    headers: new HttpHeaders({
      'x-auth-subject': 'soggetto1Prova',
      'x-auth-roles': 'ruoloProva ',
      'x-auth-email': 'bubu',
      'x-auth-username': 'jj',
      'x-auth-userid': 'pp'
    })
  };

  myObserver = {
    next: (x: string) => 'Observer got a next value: ' + x, //// invocato quando un valore viene emesso
    error: (err: string) => 'Observer got an error: ' + err, // in caso di errori (di vario genere)
    complete: () => 'Observer got a complete notification',   // quando l'observable termina di emettere dati
  };
  private element: any;
  constructor(private retriveUserService: RequestUserServiceService) {
  }
  ngOnInit(): void {
    // this.retriveUserService.getUserById();
    this.userResponse = new UserResponse();

  }
  openRegisterDialog(): void {
    this.collapsedRegister = !this.collapsedRegister;
    this.close.emit();
  }

  openLogInDialog(): void {
    this.collapsedLogIn = !this.collapsedLogIn;
    this.close.emit();
  }
  submitToServerRegister() {
  }
}

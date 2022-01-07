import {Component, OnInit} from '@angular/core';
import {UserResponse} from "../../../services/response/user-response";
import {RequestClientServiceService} from "../../../services/request/request-client-service.service";
import {AppComponent} from "../../../app.component";
import {RequestConsultantServiceService} from "../../../services/request/request-consultant-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  name = 'Insert name';
  userName = 'Insert username';
  eMail = 'Insert email';
  password = 'insert password';
  confirm_password = 'confirm_password';
  childInputUsername: string;
  childInputMail: string;
  userResponse: UserResponse | undefined;


  constructor(private consulantService: RequestConsultantServiceService, private clientService: RequestClientServiceService, private appComponent: AppComponent) {

  }

  addInputToVariableRegisterUserName(newItem: string) {
    this.childInputUsername = newItem;
  }

  addInputToVariableRegisterMail(newItem: string) {
    this.childInputMail = newItem;
  }

  ngOnInit(): void {
    //nothing to do
  }

  async submitToServerRegister() {
    await this.delay(500);
    if (this.appComponent.pageClient === true)
      this.clientService.putClient(this.childInputUsername);
    else this.consulantService.putConsultant(this.childInputUsername);
    alert('aggiunto utente: ' + this.childInputUsername);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

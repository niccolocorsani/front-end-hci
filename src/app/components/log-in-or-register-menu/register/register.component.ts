import {Component, OnInit} from '@angular/core';
import {RequestClientServiceService} from "../../../services/request/request-client-service.service";
import {RequestConsultantServiceService} from "../../../services/request/request-consultant-service.service";
import {ClientResponse} from "../../../services/response/client-response";
import {ConsultantResponse} from "../../../services/response/consultant-response";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  name = 'name';
  userName = 'username';
  eMail = 'email';
  childInputUsername: string;
  description= 'description';
  phone_number = 'phone_number';

  consultant_or_client : boolean;

  constructor(private consulantService: RequestConsultantServiceService, private clientService: RequestClientServiceService) {


    if (document.getElementById("header").textContent.includes("Client"))
      this.consultant_or_client = true;
    else  this.consultant_or_client = false;

  }

  ngOnInit(): void {
    //nothing to do
  }

  addInputToVariableRegister(newItem: string) {
    this.childInputUsername = newItem;
  }



  async submitToServerRegister() {
    await this.delay(500);
    if (document.getElementById("header").textContent.includes("Client")) {
      let client = new ClientResponse();
      client.userName = this.childInputUsername
      ////TODO Da finire la parte di riempimento dati dell cliente e anche del consultant qui sotto
      this.clientService.putClient(client);
    } else {
      let consultant = new ConsultantResponse();
      consultant.userName = this.childInputUsername
      this.consulantService.putConsultant(consultant);
    }
    alert('aggiunto utente: ' + this.childInputUsername);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

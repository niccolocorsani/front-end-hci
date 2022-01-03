import {Component, OnInit} from '@angular/core';
import {UserResponse} from "../../../services/response/user-response";
import {AppComponent} from "../../../app.component";
import {RequestConsultantServiceService} from "../../../services/request/request-consultant-service.service";
import {RequestClientServiceService} from "../../../services/request/request-client-service.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {

  public listElements: Array<UserResponse> = [];
  private element: any;
  name = 'Insert name';
  userName = 'Insert Username';
  eMail = 'Insert Email';
  childInput: string ;

  addInputToVariable(newItem: string) {
    this.childInput = newItem;
  }

  constructor(private consulantService: RequestConsultantServiceService, private clientService: RequestClientServiceService, private appComponent: AppComponent) {
  }

  ngOnInit(): void {
    //nothing to do
  }

  async submitToServerLogIn() {
    if (this.appComponent.pageConsultant === true) {
      this.listElements = this.consulantService.getConsultantList();
      await this.delay(500);
      for (this.element of this.listElements) {
        if (this.element.userName === this.childInput) {
          alert("User " + this.childInput + " found..");
          this.consulantService.loggedConsultant = this.element;
        }
      }
      alert("User not found..");
    }
    else   {
      this.listElements = this.clientService.getClientList();
      await this.delay(500);
      for (this.element of this.listElements) {
        if (this.element.userName === this.childInput) {
          this.appComponent.userLogged = this.childInput;
          alert("User " + this.childInput + " found..");
        }
      }
      alert("User not found..");
    }
    document.getElementById("header").textContent = document.getElementById("header").textContent + " logged user: "+this.childInput;
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

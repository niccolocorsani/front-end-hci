import {Component, OnInit} from '@angular/core';
import {UserResponse} from "../../services/response/user-response";
import {AppComponent} from "../../app.component";
import {RequestConsultantServiceService} from "../../services/request/request-consultant-service.service";
import {RequestClientServiceService} from "../../services/request/request-client-service.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  name = 'Insert name';
  userName = 'Insert Username';
  eMail = 'Insert Email';
  public listElements: Array<UserResponse> = [];
  private element: any;
  childInput: string | undefined;

  addInputToVariable(newItem: string) {
    this.childInput = newItem;
  }

  constructor(private consulantService: RequestConsultantServiceService, private clientService: RequestClientServiceService, private appComponent: AppComponent) {
  }

  ngOnInit(): void {
    const userResponse = new UserResponse();
    userResponse.name = '----------';
    userResponse.email = '----------';
    userResponse.surname = '----------';
    const strings: Array<string> = ['----------', '----------'];   //// non si può pushare gli array di stringhe, ma solo assegnare
    userResponse.roles = strings;
    this.listElements.push(userResponse);
  }

  async submitToServerLogIn() {

    if (this.appComponent.pageConsultant === true) {
      this.listElements = this.consulantService.getConsultantList();
      await this.delay(500);
      for (this.element of this.listElements) {
        if (this.element.userName === this.childInput) {
          this.appComponent.userLogged = this.childInput;
          alert("User " + this.childInput + " found");
          return;
        }
      }
      alert("User not found");
    }
    else   {
      this.listElements = this.clientService.getClientList();
      await this.delay(500);
      for (this.element of this.listElements) {
        if (this.element.userName === this.childInput) {
          this.appComponent.userLogged = this.childInput;
          alert("User " + this.childInput + " found");
          return;
        }
      }
      alert("User not found");
    }
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

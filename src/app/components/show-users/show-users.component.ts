import { Component, OnInit } from '@angular/core';
import {ConsultantResponse} from "../../services/response/consultant-response";
import {RequestConsultantServiceService} from "../../services/request/request-consultant-service.service";

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
})
export class ShowUsersComponent implements OnInit {

  public listElements: Array<ConsultantResponse> = [];
  private showUser = false;

  constructor(private consultantService: RequestConsultantServiceService) { }

  ngOnInit() {}

  async retriveUsers() {
    if (this.showUser === false)
      this.showUser = true;
    else this.showUser = false;
    this.listElements = this.consultantService.getSynchronousConsultants();
  }




}

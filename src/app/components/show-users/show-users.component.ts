import { Component, OnInit } from '@angular/core';
import {ConsultantResponse} from "../../services/response/consultant-response";
import {RequestConsultantServiceService} from "../../services/request/request-consultant-service.service";

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
})
export class ShowUsersComponent implements OnInit {

  public listElements: Array<ConsultantResponse> = [];

  constructor(private consultantService: RequestConsultantServiceService) { }

  ngOnInit() {
    this.listElements = this.consultantService.getSynchronousConsultants();

  }

}

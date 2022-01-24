import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ConsultantResponse} from "../../../services/response/consultant-response";
import {RequestConsultantServiceService} from "../../../services/request/request-consultant-service.service";
import {OpenComponentsService} from "../../../services/open-components/open-components.service";

@Component({
  selector: 'app-select-users-modal',
  templateUrl: './select-users-modal.component.html',
})
export class SelectUsersModalComponent implements OnInit {

  public listElements: Array<ConsultantResponse> = [];
  public showUser: boolean;
  consultant = new ConsultantResponse();


  constructor(private consultantService: RequestConsultantServiceService, public modalCtrl: ModalController, private openComponentsService: OpenComponentsService) {
    this.showUser = false;
  }

  ngOnInit() {
    //nothing to do
  }

  async retriveUsers() {
    if (this.showUser === false)
      this.showUser = true;
    else this.showUser = false;
    this.listElements = this.consultantService.getSynchronousConsultants();
  }


  async loadAppointments(id: string) {
    this.openComponentsService.openDialogCalendar = true;
    this.close();
    this.consultant = this.consultantService.getSynchronousConsultantById(id);
    document.getElementById("home-menu").textContent = this.consultant.id + " " + this.consultant.firstName + " " + this.consultant.lastName;
    alert("Loading appointments of consultant: "+ this.consultant.firstName + " " + this.consultant.lastName )
    this.consultantService.getConsultantAppointments(id);
    this.consultantService.getConsultantAppointments(this.consultant.id)
  }


  async close() {
    await this.modalCtrl.dismiss();
  }

}

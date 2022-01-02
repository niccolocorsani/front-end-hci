import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ConsultantResponse} from "../../services/response/consultant-response";
import {RequestConsultantServiceService} from "../../services/request/request-consultant-service.service";
import {CalModalPage} from "../pages/cal-modal/cal-modal.page";
import {OpenComponentsService} from "../../services/open-components/open-components.service";

@Component({
  selector: 'app-select-users-modal',
  templateUrl: './select-users-modal.component.html',
})
export class SelectUsersModalComponent implements OnInit {

  @Input() name: string;
  public listElements: Array<ConsultantResponse> = [];
  public showUser: boolean | undefined;
  eventSourceSelected = [];
  eventStart: any;
  modalDataResponse: any;

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
    this.listElements = this.consultantService.getConsultantList();
    await this.delay(500);
  }

  loadAppointments(id: string) {
    this.openComponentsService.openDialogCalendar = true;
    this.close();
    alert("Load appointments..")
    this.consultantService.updateAppointments(id);
  }


  async close() {
    await this.modalCtrl.dismiss();
  }

/////Questa funzione è necessaria ogni volta che avviene una chiamata al backend
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

import {Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ConsultantResponse} from "../../services/response/consultant-response";
import {RequestConsultantServiceService} from "../../services/request/request-consultant-service.service";
import {MyCalendarComponent} from "../my-calendar/my-calendar.component";

@Component({
  selector: 'app-select-users-modal',
  templateUrl: './select-users-modal.component.html',
  styleUrls: ['./select-users-modal.component.scss'],
})
export class SelectUsersModalComponent implements OnInit {

  @Input() name: string;

  constructor(private consultantService: RequestConsultantServiceService, private myCalendar: MyCalendarComponent,public modalCtrl: ModalController) {
    this.showUser = false;
  }

  ngOnInit() { }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtrl.dismiss(closeModal);
  }

  public listElements: Array<ConsultantResponse> = [];
  public showUser: boolean | undefined;
  eventSourceSelected = [];

  async retriveUsers() {
    if (this.showUser === false)
      this.showUser = true;
    else this.showUser = false;
    this.listElements = this.consultantService.getConsultantList();
    await this.delay(500);
  }

/////Questa funzione è necessaria ogi volta che avviene una chiamata al backend
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  eventStart: any;
  modalDataResponse: any;

  loadAppointments(userName: string) {
    this.consultantService.updateAppointments(userName);
  }

}

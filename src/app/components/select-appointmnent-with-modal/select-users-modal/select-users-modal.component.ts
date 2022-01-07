import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ConsultantResponse} from "../../../services/response/consultant-response";
import {RequestConsultantServiceService} from "../../../services/request/request-consultant-service.service";
import {CalModalPage} from "../../my-calendar-with-modal/cal-modal/cal-modal.page";
import {OpenComponentsService} from "../../../services/open-components/open-components.service";

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

   consultant: ConsultantResponse;

  async loadAppointments(id: string) {
    this.openComponentsService.openDialogCalendar = true;
    this.close();
    this.openCalModal();
    this.consultantService.getConsultantById(id);
    await this.delay(500);
    console.log(this.consultantService.lastSelectedConsultant.firstName)


    document.getElementById("home-menu").textContent = this.consultantService.lastSelectedConsultant.firstName +" " + this.consultantService.lastSelectedConsultant.lastName ;

    ////Boscata la cosa del modal che espone i momenti liberi, uno li osserva nel calendario principale i momenti liberi


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



































  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });
    await modal.present();
    //// Questo è triggherato dopo che viene confermato l'evento nella ui di cal-modal
    modal.onDidDismiss().then((result) => {
        alert('Aggiunto evento con orario: ' +'..')
        //this.eventSource.push(event);
       // this.myCal.loadEvents();
      ////TODO capire come mettere eventi nel modal ecc..
      })
    }

}

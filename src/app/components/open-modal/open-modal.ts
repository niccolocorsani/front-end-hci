import {Component, OnInit} from '@angular/core';
import {RequestConsultantServiceService} from "../../services/request/request-consultant-service.service";
import {ModalController} from "@ionic/angular";
import {SelectUsersModalComponent} from "../select-users-modal/select-users-modal.component";

@Component({
  selector: 'app-open-modal',
  templateUrl: './show-users.component.html',
})
export class OpenModal implements OnInit {

  constructor(private consultantService: RequestConsultantServiceService, public modalCtrl: ModalController) {
  }

  ngOnInit(): void {
    //nothing to do
  }



  async initModal() {
    const modal = await this.modalCtrl.create({
      component: SelectUsersModalComponent,
    });
    return modal.present();
  }

  viewLoggedUserAppointments() {
    this.consultantService.viewLoggedUserAppointments();
  }
}

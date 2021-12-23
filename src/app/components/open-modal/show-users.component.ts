import {Component, Input, OnInit} from '@angular/core';
import {RequestConsultantServiceService} from "../../services/request/request-consultant-service.service";
import {ModalController} from "@ionic/angular";
import {SelectUsersModalComponent} from "../select-users-modal/select-users-modal.component";

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  constructor(private consultantService: RequestConsultantServiceService, public modalCtrl: ModalController) {
  }

  ngOnInit(): void {
  }



  async initModal() {
    const modal = await this.modalCtrl.create({
      component: SelectUsersModalComponent,
    });
    return await modal.present();
  }

  viewLoggedUserAppointments() {
    this.consultantService.viewLoggedUserAppointments();
  }
}

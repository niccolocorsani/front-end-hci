import {Component, Input, OnInit} from '@angular/core';
import {ConsultantResponse} from "../../services/response/consultant-response";
import {RequestConsultantServiceService} from "../../services/request/request-consultant-service.service";
import {MyCalendarComponent} from "../my-calendar/my-calendar.component";
import {ModalController} from "@ionic/angular";
import {SelectUsersModalComponent} from "../select-users-modal/select-users-modal.component";

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {


  constructor(public modalCtrl: ModalController) {
  }

  ngOnInit(): void {
  }

  modalDataResponse: any;


  async initModal() {
    const modal = await this.modalCtrl.create({
      component: SelectUsersModalComponent,
      componentProps: {
        'name': 'The Winter Soldier'
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }
}

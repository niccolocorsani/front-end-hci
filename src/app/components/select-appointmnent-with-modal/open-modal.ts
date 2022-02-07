import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {SelectUsersModalComponent} from "./select-users-modal/select-users-modal.component";

@Component({
  selector: 'app-open-modal',
  templateUrl: './open-modal.html',
})
export class OpenModal {


  constructor(public modalCtrl: ModalController) {
  }

  async initModal() {
    const modal = await this.modalCtrl.create({
      component: SelectUsersModalComponent,
    });
    return modal.present();
  }

}

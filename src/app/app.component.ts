import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  pageClient = false;
  pageConsultant = false;
  chosePage = true;
  userLogged: string;


  async openCliente() {
    this.pageConsultant = false;
    this.chosePage = false;
    this.pageClient = true;

  }
  async openConsultant() {
    this.pageClient = false;
    this.chosePage = false;
    this.pageConsultant = true;

  }



}

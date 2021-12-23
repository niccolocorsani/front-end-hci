import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  pageClient = false;
  pageConsultant = false;
  chosePage = true;
 userLogged: string;


  openCliente() {
    this.pageConsultant = false;
    this.chosePage = false;
    this.pageClient = true;
  }
  openConsultant() {
    this.pageClient = false;
    this.chosePage = false;
    this.pageConsultant = true;
  }
}

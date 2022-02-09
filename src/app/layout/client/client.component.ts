import { Component, OnInit } from '@angular/core';
import {OpenComponentsService} from "../../services/open-components/open-components.service";
import {AsyncWaitAnimationService} from "../../services/async-wait-animation/async-wait-animation.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent  implements  OnInit{






  constructor(private openComponentsService: OpenComponentsService){
  }


  ngOnInit(): void {
    document.getElementById("card-image").style.display="none";

  }

  public appPages = [
    {title: 'Account', url: '/folder/Inbox', icon: 'cafe'},
    {title: 'Show Consultants', url: '/folder/Outbox', icon: 'man'},
    {title: 'Calendar', url: '/folder/Trash', icon: 'calendar'},
  ];


  openMenu() {


    if (this.openComponentsService.openDialogMenu === false) {
      this.openComponentsService.openDialogMenu = true;
    } else {
      this.openComponentsService.openDialogVarAccount = false;
      this.openComponentsService.openDialogVarShowUsers = false;
      this.openComponentsService.openDialogCalendar = false;

    }
  }

  openDialog(title: any) {

    if (title === 'Account') {
      if (window.innerHeight < 700) this.openComponentsService.openDialogMenu = false;
      this.openComponentsService.openDialogVarAccount = true;
      this.openComponentsService.openDialogVarShowUsers = false;
      this.openComponentsService.openDialogCalendar = false;

      return;
    }
    if (title === 'Show Users') {
      if (window.innerHeight < 700) this.openComponentsService.openDialogMenu = false;
      this.openComponentsService.openDialogVarShowUsers = true;
      this.openComponentsService.openDialogVarAccount = false;
      this.openComponentsService.openDialogCalendar = false;

      return;
    }
    if (title === 'Calendar') {


      if (window.innerHeight < 700) this.openComponentsService.openDialogMenu = false;
      this.openComponentsService.openDialogCalendar = true;
      this.openComponentsService.openDialogVarShowUsers = false;
      this.openComponentsService.openDialogVarAccount = false;
    }
  }


}

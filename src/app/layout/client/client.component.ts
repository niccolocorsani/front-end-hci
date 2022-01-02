import { Component, OnInit } from '@angular/core';
import {OpenComponentsService} from "../../services/open-components/open-components.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {


  ngOnInit() {
    //nothing to do
  }


  constructor(private openComponentsService: OpenComponentsService){
  }

  public appPages = [
    {title: 'Account', url: '/folder/Inbox', icon: 'mail'},
    {title: 'Show Users', url: '/folder/Outbox', icon: 'paper-plane'},
    {title: 'Calendar', url: '/folder/Trash', icon: 'trash'},

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  openMenu() {

    if (this.openComponentsService.openDialogMenu === false) {
      this.openComponentsService.openDialogMenu = true;
    } else {
      this.openComponentsService.openDialogMenu = false;
      this.openComponentsService.openDialogVarAccount = false;
      this.openComponentsService.openDialogVarShowUsers = false;
      this.openComponentsService.openDialogCalendar = false;

    }
  }

  openDialog(title: any) {

    if (title === 'Account') {
      this.openComponentsService.openDialogVarAccount = true;
      this.openComponentsService.openDialogVarShowUsers = false;
      this.openComponentsService.openDialogCalendar = false;

      return;
    }
    if (title === 'Show Users') {
      this.openComponentsService.openDialogVarShowUsers = true;
      this.openComponentsService.openDialogVarAccount = false;
      this.openComponentsService.openDialogCalendar = false;

      return;
    }
    if (title === 'Calendar') {
      this.openComponentsService.openDialogCalendar = true;
      this.openComponentsService.openDialogVarShowUsers = false;
      this.openComponentsService.openDialogVarAccount = false;
    }
  }

}

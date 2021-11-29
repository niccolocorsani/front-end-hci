import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


  openDialogVarAccount = false;
  openDialogVarShowUsers = false;
  openDialogNotification = false;
  openDialogCalendar = false;

  openDialogMenu = true;





  public appPages = [
    {title: 'Account', url: '/folder/Inbox', icon: 'mail'},
    {title: 'Show Users', url: '/folder/Outbox', icon: 'paper-plane'},
    {title: 'Calendar', url: '/folder/Trash', icon: 'trash'},
    /*  {title: 'Trash', url: '/folder/Trash', icon: 'star'},
      {title: 'Trash', url: '/folder/Trash', icon: 'alarm'},
      {title: 'Trash', url: '/folder/Trash', icon: 'at'},
      {title: 'Trash', url: '/folder/Trash', icon: 'baseball'},
      {title: 'Trash', url: '/folder/Trash', icon: 'bed'},
      {title: 'Trash', url: '/folder/Trash', icon: 'bug'},
      {title: 'Trash', url: '/folder/Trash', icon: 'build'},
      {title: 'Trash', url: '/folder/Trash', icon: 'bicycle'},
      {title: 'Trash', url: '/folder/Trash', icon: 'beer'},
      {title: 'Trash', url: '/folder/Trash', icon: 'bookmark'},
      {title: 'Trash', url: '/folder/Trash', icon: 'bulb'},
      {title: 'Trash', url: '/folder/Trash', icon: 'trash'},*/
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];


  openMenu() {
    if (this.openDialogMenu === false) {
      this.openDialogMenu = true;
    } else {
      this.openDialogMenu = false;
      this.openDialogVarAccount = false;
      this.openDialogVarShowUsers = false;
      this.openDialogCalendar = false;

    }
  }

  openDialog(title: any) {
    if (title === 'Account') {
      this.openDialogVarAccount = true;
      this.openDialogVarShowUsers = false;
      this.openDialogCalendar = false;

      return;
    }
    if (title === 'Show Users') {
      this.openDialogVarShowUsers = true;
      this.openDialogVarAccount = false;
      this.openDialogCalendar = false;

      return;
    }
    if (title === 'Calendar') {
      this.openDialogCalendar = true;
      this.openDialogVarShowUsers = false;
      this.openDialogVarAccount = false;
      return;
    }
  }

}

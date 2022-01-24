import {Component, OnInit} from '@angular/core';
import {OpenComponentsService} from "../../services/open-components/open-components.service";

@Component({
    selector: 'app-business-consultant',
    templateUrl: './business-consultant.component.html',
})
export class BusinessConsultantComponent implements OnInit {


    baseUrl = '/folder/Trash' ;

    ngOnInit() {
        //nothing to do
    }


    constructor(private openComponentsService: OpenComponentsService) {
    }


    public appPages = [
        {title: 'Account', url: '/folder/Inbox', icon: 'mail'},
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


    openMenu() {
        if (this.openComponentsService.openDialogMenu === false) {
            this.openComponentsService.openDialogMenu = true;
        } else {
            this.openComponentsService.openDialogVarAccount = false;
            this.openComponentsService.openDialogCalendar = false;
            this.openComponentsService.openDialogMaps = false;


        }
    }

    openDialog(title: any) {
        if (title === 'Account') {
            if (window.innerHeight < 700) this.openComponentsService.openDialogMenu = false;
            this.openComponentsService.openDialogVarAccount = true;
            this.openComponentsService.openDialogMaps = true;
            this.openComponentsService.openDialogCalendar = false;

            return;
        }


        if (title === 'Calendar') {
            if (window.innerHeight < 700) this.openComponentsService.openDialogMenu = false;
            this.openComponentsService.openDialogCalendar = true;
            this.openComponentsService.openDialogVarAccount = false;
            this.openComponentsService.openDialogMaps = false;

        }
    }


}

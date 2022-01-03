import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {CalendarComponent} from "ionic2-calendar";
import {AlertController, ModalController} from "@ionic/angular";
import {CalModalPage} from "./cal-modal/cal-modal.page";
import {formatDate} from "@angular/common";
import {AppComponent} from "../../app.component";
import {RequestConsultantServiceService} from "../../services/request/request-consultant-service.service";

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
})
export class MyCalendarComponent implements OnInit {
  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    private consultantService: RequestConsultantServiceService,
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private modalCtrl: ModalController,
    private appComponent: AppComponent
  ) {
  }


  ngOnInit() {
   // https://levelup.gitconnected.com/5-ways-to-share-data-between-angular-components-d656a7eb7f96
    this.consultantService.currentMessage.subscribe(events => (this.eventSource= events)); //<= Always get current value!
  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK'],
    });
    alert.present();
  }


  removeEvents() {
    this.eventSource = [];
  }

  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });
    await modal.present();
    //// Questo è triggherato dopo che viene confermato l'evento nella ui di cal-modal
    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.event) {
        let event = result.data.event;
        let start = event.startTime;
        let end = event.endTime;
        event.startTime = new Date(
          Date.UTC(
            start.getUTCFullYear(),
            start.getUTCMonth(),
            start.getUTCDate(),
            start.getUTCHours(),
            start.getUTCMinutes()
          )
        );
        event.endTime = new Date(
          Date.UTC(
            end.getUTCFullYear(),
            end.getUTCMonth(),
            end.getUTCDate(),
            end.getUTCHours(),
            end.getUTCMinutes()
          )
        );
        alert('Aggiunto evento con orario: ' + event.startTime + ' ' + event.endTime+'..')
        this.eventSource.push(event);
        this.myCal.loadEvents();
      }
    });
  }

  otherEvents = [];

  loadData(events: any[]) {
        var evss = [];
        var date = new Date();
        var startDay = 3;
        var endDay = 3;
        var startTime;
        var endTime;
        var startMinute = 30;
        var endMinute = 45;
        startTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
          date.getMinutes() + startMinute
        );
        endTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + endDay,
          0,
          date.getMinutes() + endMinute
        );
        events.push({
          title: 'Event - ' + 1,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
    ////Provando a scatenare il riempimento cliccando il tasto random events si osserva che i dati di otherevents sono nulli
    alert("prima dell'assegnamento " + this.otherEvents);
    this.eventSource = events;

  }

}

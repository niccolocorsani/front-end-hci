import {Component, AfterViewInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
})
export class CalModalPage implements AfterViewInit {
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  viewTitle: string;

  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: null,
    allDay: false
  };


  modalReady = false;
  private titolo: string;
  private descrizione: string;
  date: any;

  constructor(private modalCtrl: ModalController) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }

  save() {
    var inputValue;
    inputValue = (<HTMLInputElement>document.getElementById('start')).value;
    let hourStart = inputValue.split(':')[0];
    let minuteStart = inputValue.split(':')[1];
    this.event.startTime.setHours(hourStart);
    this.event.startTime.setMinutes(minuteStart);


    inputValue = (<HTMLInputElement>document.getElementById('end')).value;
    let hourEnd = inputValue.split(':')[0]
    let minuteEnd = inputValue.split(':')[1]
    this.event.endTime.setHours(hourEnd);
    this.event.endTime.setMinutes(minuteEnd);



    this.modalCtrl.dismiss({event: this.event});

  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }


  close() {
    this.modalCtrl.dismiss();
  }

  timeSelected = 0;

  onTimeSelected(ev) {
    this.event.startTime = new Date(ev.selectedTime);
    this.event.endTime = new Date(ev.selectedTime);
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
})
export class MyInputComponent implements OnInit {

  constructor() {
  }

  @Input() inputStringValue = '';


////https://angular.io/guide/inputs-outputs
  @Output() newItemEvent = new EventEmitter<string>();


  ngOnInit(): void {
  }


  newInputFromMyInput(value: string) {
    this.newItemEvent.emit(value);

  }
}

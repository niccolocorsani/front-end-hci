import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
})
export class MyInputComponent implements OnInit {

  //https://angular.io/guide/inputs-outputs
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() inputStringValue = '';

  ngOnInit(): void {
    //nothing to do
  }


  newInputFromMyInput(value: string) {
    this.newItemEvent.emit(value);

  }
}

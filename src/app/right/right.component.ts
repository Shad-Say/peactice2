import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
})
export class RightComponent {
  counterRight = 0;
  @Output() sendParent = new EventEmitter();

  rightButtonClicked(value: number) {
    if (value) {
      this.sendParent.emit(value);
      console.log('working');
    }
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
})
export class LeftComponent {
  @Input() counterLeft = 0;

  // onChangeLeft() {}
}

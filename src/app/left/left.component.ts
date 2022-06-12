import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
})
export class LeftComponent {
  @Input() leftValue = 0; 
  @Output() incrementRight = new EventEmitter<number>();
}

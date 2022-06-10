import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { LeftComponent } from './left/left.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice2';
  counterLeft = 0;

  putOnLeft(digit: number) {
    this.counterLeft = digit;
    console.log(digit);
    return this.counterLeft;
  }
}

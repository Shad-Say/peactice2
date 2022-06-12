import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Output } from '@angular/core';
import { LeftComponent } from './left/left.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice2';
  @Output() counterLeft = 0; // Passes From Parent to Child Left
  @Output() counterRight = 0; // Passes From Parent to Child Right

  incrementRightCounter() {
    this.counterRight += 1;
  }

  incrementLeftCounter() {
    this.counterLeft += 1;
  }
}

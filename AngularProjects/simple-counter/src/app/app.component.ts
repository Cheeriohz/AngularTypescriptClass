import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;
  isDisabled: boolean = true;
  constructor() {}

  decrementCounter(){
    this.counter--;
  }

  incrementCounter(){
    this.counter ++;
  }
  
  get isRed(): string {
    if(this.counter % 2 == 0) {
      return 'Red';
    }
    return 'Black';
  }

  get isBold(): string {
    if(this.counter % 3 == 0) {
      return 'bold';
    }
    return 'normal';
  }

  get isItalic(): string {
    if(this.counter % 7 == 0) {
      return 'italic';
    }
    return 'normal';
  }


}

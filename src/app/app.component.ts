import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public date: Date = new Date();

  constructor() { }

  get fecha(): number {
    return this.date.getFullYear();
  }
}

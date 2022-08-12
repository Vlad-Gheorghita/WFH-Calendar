import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent {
  @Input() day: any;
  @Input() month: any;

  checkIfToday(): boolean {
    const currentDate = new Date();
    return (this.day === currentDate.getDate()) ? true : false;
  }
}

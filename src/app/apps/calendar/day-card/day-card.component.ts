import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent implements OnInit {
  @Input() currentDay: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}

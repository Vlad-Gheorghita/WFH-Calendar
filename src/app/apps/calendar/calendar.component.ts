import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  currentDate: Date = new Date();
  monthNameList: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

  constructor() { }

  ngOnInit(): void {
  }

  getMonthName(monthNumber: number){
    return this.monthNameList[monthNumber];
  }

}

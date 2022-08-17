import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Wfh } from '../models/wfh';
import { WfhService } from './wfh.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  monthNameList: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  dayNameList: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  date: Date;
  workingDays: number;


  constructor() {
    this.date = new Date();
    this.workingDays = this.getNumberOfWorkingDays(this.monthNameList[this.date.getMonth()], this.date.getFullYear());
  }

  getNumberOfDaysInMonth(monthNumber: number): number {
    monthNumber++;
    if (monthNumber === 2) {
      return (this.checkLeapYear(new Date().getFullYear())) ? 29 : 28;
    }
    return (monthNumber <= 7 && monthNumber % 2 !== 0) || (monthNumber >= 8 && monthNumber % 2 === 0) ? 31 : 30;
  }


  private getNumberOfWorkingDays(monthName: string, year: number): number {
    var result = 0;
    var date = new Date(year, this.monthNameList.indexOf(monthName), 1);

    for (let i: number = 1; i <= this.getNumberOfDaysInMonth(date.getMonth()); i++) {
      date.setDate(i);
      (this.dayNameList[date.getDay()] !== "Saturday"
        && this.dayNameList[date.getDay()] !== "Sunday") ? result += 1 : result += 0;
    }

    return result;
  }

  private checkLeapYear(year: number): boolean {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

}

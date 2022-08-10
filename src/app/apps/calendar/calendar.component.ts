import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  currentDate: Date = new Date();
  monthNameList: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  getMonthName(monthNumber: number) {
    return this.monthNameList[monthNumber];
  }

  getNumberOfDaysInMonth(monthNumber: number): number {
    monthNumber++;
    if (monthNumber === 2) {
      return (this.checkLeapYear(this.currentDate.getFullYear())) ? 29 : 28;
    }
    return (monthNumber <= 7 && monthNumber % 2 !== 0) || (monthNumber >= 8 && monthNumber % 2 === 0) ? 31 : 30;
  }

  getArrayOfDaysInMonth(numberOfDays: number): number[] {
    return Array.from({ length: numberOfDays }, (_, i) => i + 1);
  }

  private checkLeapYear(year: number): boolean {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

}

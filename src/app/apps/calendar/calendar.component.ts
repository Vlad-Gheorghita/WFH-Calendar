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
  dayNameList: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  //De scos parametrul si adaugat currentDate.getMonth()
  getMonthName(monthNumber: number) {
    return this.monthNameList[monthNumber];
  }

  getArrayOfDaysWithSameName(dayName: string): number[] {
    let result: number[] = [];
    let date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const numberOfDaysInCurrentMonth = this.getArrayOfDaysInMonth();


    if (date.getDay() > this.dayNameList.indexOf(dayName) && dayName !== 'Sunday') {
      result.push(this.getNumberOfDaysInMonth(date.getMonth() - 1) - (date.getDay() - this.dayNameList.indexOf(dayName)) + 1);
    }

    numberOfDaysInCurrentMonth.forEach(day => {
      date.setDate(day);

      if (this.dayNameList[date.getDay()] === dayName)
        result.push(day);
    })

    return result;
  }

  private getArrayOfDaysInMonth(): number[] {
    return Array.from({ length: this.getNumberOfDaysInMonth(this.currentDate.getMonth()) }, (_, i) => i + 1);
  }

  private getNumberOfDaysInMonth(monthNumber: number): number {
    monthNumber++;
    if (monthNumber === 2) {
      return (this.checkLeapYear(this.currentDate.getFullYear())) ? 29 : 28;
    }
    return (monthNumber <= 7 && monthNumber % 2 !== 0) || (monthNumber >= 8 && monthNumber % 2 === 0) ? 31 : 30;
  }
  private checkLeapYear(year: number): boolean {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }


}

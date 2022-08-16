
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { Wfh } from 'src/app/libs/models/wfh';
import { WfhService } from 'src/app/libs/services/wfh.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  monthNameList: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  dayNameList: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  currentMonthWfh: Wfh = new Wfh();
  currentDate: Date = new Date();
  userId: string = '';

  constructor(private wfhService: WfhService) {
  }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user')!).uid;
    this.getWfh();
  }

  getMonthName() {
    return this.monthNameList[this.currentDate.getMonth()];
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

  getWfh(){
    this.wfhService.getWfhByUserId(this.userId, 'august')
      .subscribe(r => {
        r.length === 0 ? this.currentMonthWfh.daysWFH.push(32) : this.currentMonthWfh = r[0];
      })
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

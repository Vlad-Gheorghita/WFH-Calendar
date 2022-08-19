
import { Component, Input, OnInit } from '@angular/core';
import { Wfh } from 'src/app/libs/models/wfh';
import { CalendarService } from 'src/app/libs/services/calendar.service';
import { UserService } from 'src/app/libs/services/user.service';
import { WfhService } from 'src/app/libs/services/wfh.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  workedMonth: Wfh = new Wfh();
  currentDate: Date;

  constructor(private wfhService: WfhService, private calendarService: CalendarService, private userService: UserService) {
    this.currentDate = calendarService.date;
  }
  ngOnInit(): void {
    this.getWfh();
    this.userService.isSettings.settings = false;
  }


  getMonthName() {
    return this.calendarService.monthNameList[this.currentDate.getMonth()];
  }

  getArrayOfDaysWithSameName(dayName: string): number[] {
    var result: number[] = [];
    var date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const numberOfDaysInCurrentMonth = this.getArrayOfDaysInMonth();


    if (date.getDay() > this.calendarService.dayNameList.indexOf(dayName) && dayName !== 'Sunday') {
      result.push(this.calendarService.getNumberOfDaysInMonth(date.getMonth() - 1) - (date.getDay() - this.calendarService.dayNameList.indexOf(dayName)) + 1);
    }

    numberOfDaysInCurrentMonth.forEach(day => {
      date.setDate(day);

      if (this.calendarService.dayNameList[date.getDay()] === dayName)
        result.push(day);
    })

    return result;
  }

  createDateWithDayNumber(day: number): Date {
    return new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
  }

  getWfh() {
    this.wfhService.getWfhByUserId(this.wfhService.userId, this.calendarService.monthNameList[this.currentDate.getMonth()])
      .subscribe(result => {
        const mappedResult = result.docs.map(doc => doc.data());

        mappedResult.length === 0 ? this.wfhService.createWfh() : this.workedMonth = mappedResult[0];
      })
  }

  private getArrayOfDaysInMonth(): number[] {
    return Array.from({ length: this.calendarService.getNumberOfDaysInMonth(this.currentDate.getMonth()) }, (_, i) => i + 1);
  }
}

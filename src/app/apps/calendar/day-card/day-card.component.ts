import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Wfh } from 'src/app/libs/models/wfh';
import { WfhService } from 'src/app/libs/services/wfh.service';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent implements OnInit {
  @Input() day!: number;
  @Input() isOfficeDay!: boolean;
  @Input() date: Date;


  
  officeDay: IconDefinition = faBriefcase;
  
  workedMonth: Wfh = new Wfh();

  constructor(private wfhService: WfhService, private router: Router) { 
    this.date = new Date();
  }
  ngOnInit(): void {
    this.getWfhForCurrentUser();
  }

  checkIfToday(): boolean {
    const currentDate = new Date();
    return (this.day === currentDate.getDate()) ? true : false;
  }

  toggleOfficeDayToWorkedMonth() {
    this.workedMonth.daysWFH.includes(this.day) ? 
    this.workedMonth.daysWFH.splice(this.workedMonth.daysWFH.indexOf(this.day),1) :
    this.workedMonth.daysWFH.push(this.day);

    this.workedMonth.daysWFH.sort();
    this.isOfficeDay = true;
    this.wfhService.updateWfh(this.workedMonth);
  }

  private getWfhForCurrentUser() {
    const userId = JSON.parse(localStorage.getItem('user')!).uid;

    this.wfhService.getWfhByUserId(userId, this.wfhService.monthNameList[this.date.getMonth()])
      .subscribe(r => this.workedMonth = r[0]);
  }
  
}

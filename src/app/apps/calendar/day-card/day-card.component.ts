import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { Wfh } from 'src/app/libs/models/wfh';
import { WfhService } from 'src/app/libs/services/wfh.service';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent {
  @Input() day!: number;
  @Input() isOfficeDay!: boolean;
  @Input() date: Date;
  @Input() workedMonth: Wfh = new Wfh();

  officeDay: IconDefinition = faHouseUser;

  constructor(private wfhService: WfhService) {
    this.date = new Date();
  }

  checkIfToday(): boolean {
    const currentDate = new Date();
    return (this.day === currentDate.getDate()) ? true : false;
  }

  toggleOfficeDayToWorkedMonth() {
    this.workedMonth.daysWFH.includes(this.day) ?
      this.workedMonth.daysWFH.splice(this.workedMonth.daysWFH.indexOf(this.day), 1) :
      this.workedMonth.daysWFH.push(this.day);

    // this.workedMonth.daysWFH.sort();
    this.isOfficeDay = true;
    this.wfhService.updateWfh(this.workedMonth);
  }

}

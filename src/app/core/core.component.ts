import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../libs/services/calendar.service';
import { WfhService } from '../libs/services/wfh.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  // workedMonth: Wfh = new Wfh()

  constructor(private calendarService: CalendarService, private wfhService: WfhService) { }

  ngOnInit(): void {
    // this.getWfh();
  }

  // private getWfh(){
  //   this.wfhService.getWfhByUserId(this.wfhService.userId, this.calendarService.monthNameList[new Date().getMonth()])
  //     .subscribe(result => {
  //       const mappedResult = result.docs.map(doc => doc.data());
  //       mappedResult.length === 0 ? this.wfhService.createWfh() : this.workedMonth = mappedResult[0];
  //       // this.workedMonth = result.docChanges().map(doc => doc.doc.data())[0];
  //     })
  // }

  
}

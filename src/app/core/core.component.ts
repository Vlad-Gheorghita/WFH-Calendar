import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Wfh } from '../libs/models/wfh';
import { CalendarService } from '../libs/services/calendar.service';
import { LoadingService } from '../libs/services/loading.service';
import { WfhService } from '../libs/services/wfh.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  homeDays: any;

  constructor(private calendarService: CalendarService, private wfhService: WfhService, public loadingService: LoadingService) { }

  ngOnInit(): void {
    this.getWfh();
  }

  private getWfh() {
    this.wfhService.getWfhByUserId(this.wfhService.userId, this.calendarService.monthNameList[new Date().getMonth()])
      .subscribe(result => {
        this.loadingService.setLoading(false);
        const mappedResult = result.docs.map(doc => doc.data());

        if (mappedResult.length === 0) {
          this.homeDays = this.wfhService.homeDays;
        }
        else {
          this.wfhService.homeDays = { daysLeft: 12 - mappedResult[0].daysWFH.length };
          this.homeDays = this.wfhService.homeDays;
        }
      })
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { faArrowRightFromBracket, faBuildingCircleArrowRight, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { User } from 'src/app/libs/models/user';
import { CalendarService } from 'src/app/libs/services/calendar.service';
import { WfhService } from 'src/app/libs/services/wfh.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() homeDays!: number;

  iconList: Map<string, any> = new Map();
  user: User = new User();
  // workedMonth: Wfh = new Wfh();
  officeDays!: number;

  constructor(private authService: AuthService, private calendarService: CalendarService, public wfhService: WfhService) {
  }

  ngOnInit(): void {
    this.iconList.set("logout", faArrowRightFromBracket);
    this.iconList.set("office", faBuildingCircleArrowRight);
    this.iconList.set("home", faHouseUser);

    this.officeDays = this.calendarService.workingDays - 12;
    this.getCurrentUser();
    // this.getWfh();
  }

  logOut() {
    this.authService.SignOut();
  }

  getCurrentUser() {
    const userId = JSON.parse(localStorage.getItem('user')!).uid;

    this.authService.getUser(userId).subscribe(r => this.user = r[0]);
  }

  // getWfh(){
  //   this.wfhService.getWfhByUserId(this.wfhService.userId, this.calendarService.monthNameList[new Date().getMonth()])
  //     .subscribe(result => {
  //       this.workedMonth = result.docs.map(doc => doc.data())[0];
  //       this.homeDays = 12 - this.workedMonth.daysWFH.length;
  //     })
  // }

  // changeHomeDays(value: any){
  //   this.homeDays += value;
  // }
}

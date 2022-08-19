import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightFromBracket, faBuildingCircleArrowRight, faCalendarDays, faEllipsisVertical, faGears, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { User } from 'src/app/libs/models/user';
import { CalendarService } from 'src/app/libs/services/calendar.service';
import { UserService } from 'src/app/libs/services/user.service';
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
  officeDays!: number;
  isSettings!: any;

  constructor(private router: Router, private authService: AuthService, private calendarService: CalendarService, public wfhService: WfhService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.iconList.set("logout", faArrowRightFromBracket);
    this.iconList.set("office", faBuildingCircleArrowRight);
    this.iconList.set("home", faHouseUser);
    this.iconList.set("menu", faEllipsisVertical);
    this.iconList.set("settings", faGears);
    this.iconList.set("calendar", faCalendarDays);

    this.officeDays = this.calendarService.workingDays - 12;
    this.getCurrentUser();
    this.isSettings = this.userService.isSettings;
  }

  logOut() {
    this.authService.SignOut();
  }

  goToSettings() {
    this.router.navigate(['app/settings']);
  }

  goToCalendar() {
    this.router.navigate(['app/calendar']);
  }

  getCurrentUser() {
    const userId = JSON.parse(localStorage.getItem('user')!).uid;

    this.authService.getUser(userId).subscribe(r => this.user = r[0]);
  }
}

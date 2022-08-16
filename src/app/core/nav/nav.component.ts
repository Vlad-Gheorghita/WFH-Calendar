import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket, faBuildingCircleArrowRight, faHouseUser} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { User } from 'src/app/libs/models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  iconList: Map<string, any> = new Map();
  user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.iconList.set("logout", faArrowRightFromBracket);
    this.iconList.set("office", faBuildingCircleArrowRight);
    this.iconList.set("home", faHouseUser);

    this.getCurrentUser();
  }

  logOut(){
    this.authService.SignOut();
  }

  getCurrentUser(){
    const userId = JSON.parse(localStorage.getItem('user')!).uid;

    this.authService.getUser(userId).subscribe(r => this.user = r[0]);
  }

}

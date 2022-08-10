import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowRightFromBracket, faBuildingCircleArrowRight, faHouseUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/libs/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  iconList: Map<string, any> = new Map();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.iconList.set("logout", faArrowRightFromBracket);
    this.iconList.set("office", faBuildingCircleArrowRight);
    this.iconList.set("home", faHouseUser);

    var tst = this.iconList.get("office")
  }

  logOut(){
    this.authService.SignOut();
  }

}

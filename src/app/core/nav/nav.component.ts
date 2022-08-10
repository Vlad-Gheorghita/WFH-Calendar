import { Component, OnInit } from '@angular/core';
import { faBuildingCircleArrowRight, faHouseUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  faOffice: any;
  faHome: any;

  constructor() { }

  ngOnInit(): void {
    this.faOffice = faBuildingCircleArrowRight;
    this.faHome = faHouseUser
  }

}

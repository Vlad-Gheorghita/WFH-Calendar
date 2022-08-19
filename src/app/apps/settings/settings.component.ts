import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/libs/models/user';
import { UserService } from 'src/app/libs/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  accountDetails: any;
  currentUser: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
    this.userService.isSettings.settings = true;
  }

  getUser() {
    this.userService.getUser().subscribe(result => {
      this.currentUser = result.data()!;
    })
  }
}

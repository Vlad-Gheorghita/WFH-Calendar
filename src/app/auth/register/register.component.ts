import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/libs/models/user';
import { UserServiceService } from 'src/app/libs/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  register(){
    this.userService.createUser(Object.assign({},this.user));
  }
}

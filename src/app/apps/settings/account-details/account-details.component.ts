import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { faCircleUser, faPen } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/libs/models/user';
import { UserService } from 'src/app/libs/services/user.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  @Input() currentUser!: User

  unknownUserIcon = faCircleUser;
  editIcon = faPen;
  isEditUsername = false;
  isEditEmail = false;
  usernameForm: FormControl = new FormControl('', [Validators.required]);
  emailForm: FormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  editUsername() {
    this.isEditUsername = true;
  }

  editEmail() {
    this.isEditEmail = true;
  }

  onChangeUsername() {
    this.isEditUsername = false;
    this.currentUser.displayName = this.usernameForm.value;
    this.currentUser.displayName = this.currentUser.displayName.toLowerCase();
    this.updateUser();
    this.usernameForm.setValue('');
  }

  //To be implemented
  onChangeEmail() {
    this.isEditEmail = false;
    this.emailForm.setValue('');
  }

  updateUser() {
    this.userService.updateUser(this.currentUser);
  }
}

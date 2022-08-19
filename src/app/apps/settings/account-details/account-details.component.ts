import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { faCircleUser, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  unknownUserIcon = faCircleUser;
  editIcon = faPen;

  isEditUsername = false;
  isEditEmail = false;

  usernameForm: FormControl = new FormControl('',[Validators.required]);
  emailForm: FormControl = new FormControl('', [Validators.required, Validators.email]);
  
  constructor() { }

  ngOnInit(): void {
  }

  editUsername(){
    this.isEditUsername = true;
  }

  editEmail(){
    this.isEditEmail = true;
  }

  onChangeUsername(){
    this.isEditUsername = false;
    this.usernameForm.setValue('');
  }

  onChangeEmail(){
    this.isEditEmail = false;
    this.emailForm.setValue('');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/libs/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  passwordIcon = faKey;
  changePwdForm: FormGroup;

  constructor(private toastr: ToastrService, private userService: UserService) {
    this.changePwdForm = new FormGroup({
      oldPwd: new FormControl('', [Validators.required, Validators.minLength(6)]),
      newPwd: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPwd: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    if (this.changePwdForm.get('newPwd')?.value !== this.changePwdForm.get('confirmPwd')?.value) {
      this.toastr.error("Passwords don't match");
      return;
    }
    // this.userService.changeUserPassword(this.changePwdForm.get('newPwd')?.value)
    location.reload();
  }

  getPasswordErrorMessage(formControlName: string): string {
    if (this.changePwdForm.controls[formControlName].hasError('required'))
      return 'You must enter a password';

    return this.changePwdForm.controls[formControlName].hasError('minlength') ? 'Password must have at least 6 characters' : '';
  }

}

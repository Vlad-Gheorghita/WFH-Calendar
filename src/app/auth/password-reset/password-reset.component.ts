import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/auth/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {

  resetForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.resetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  onSubmit() {
    if (!this.resetForm.controls['email'].valid)
      return;

    this.authService.ForgotPassword(this.resetForm.get('email')!.value);
  }

  getEmailErrorMessage(): string {
    if (this.resetForm.controls['email'].hasError('required'))
      return 'You must enter a value';

    return this.resetForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }

  redirectToLogin() {
    this.router.navigate(['auth/login']);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event, Router } from '@angular/router';
import { AuthService } from 'src/app/libs/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailField: FormControl;
  passwordField: FormControl;
  loginFormGroup: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.emailField = new FormControl('', [Validators.required, Validators.email]);
    this.passwordField = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.loginFormGroup = new FormGroup({
      email: this.emailField,
      pwd: this.passwordField
    })
  }


  login(email: string, password: string) {
    this.authService.SignIn(email, password)
  }

  continueWithGoogle() {
    this.authService.GoogleAuth(true);
  }

  redirectToRegister() {
    this.router.navigate(['auth/register'])
  }

  redirectToPasswordReset(){
    this.router.navigate(['auth/password-reset'])
  }

  getEmailErrorMessage(): string {
    if (this.loginFormGroup.controls['email'].hasError('required'))
      return 'You must enter a value';

    return this.loginFormGroup.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage(): string {
    if (this.loginFormGroup.controls['pwd'].hasError('required'))
      return 'You must enter a password';

    return this.loginFormGroup.controls['pwd'].hasError('minlength') ? 'Password must have at least 6 characters' : '';
  }

  onSubmit() {

    if (!this.loginFormGroup.controls['pwd'].valid || !this.loginFormGroup.controls['pwd'].valid)
      return;

    this.login(this.loginFormGroup.get('email')!.value, this.loginFormGroup.get('pwd')!.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  emailField: FormControl;
  passwordField: FormControl;
  registerFormGroup: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.emailField = new FormControl('', [Validators.required, Validators.email]);
    this.passwordField = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.registerFormGroup = new FormGroup({
      email: this.emailField,
      pwd: this.passwordField
    })
   }

  continueWithGoogle() {
    this.authService.GoogleAuth(false);
  }

  register(email: string, password: string){
    this.authService.SignUp(email,password);
  }
  
  redirectToLogin(){
    this.router.navigate(['auth/login'])
  }

  getEmailErrorMessage(): string {
    if (this.registerFormGroup.controls['email'].hasError('required'))
      return 'You must enter a value';

    return this.registerFormGroup.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage(): string {
    if (this.registerFormGroup.controls['pwd'].hasError('required'))
      return 'You must enter a password';

    return this.registerFormGroup.controls['pwd'].hasError('minlength') ? 'Password must have at least 6 characters' : '';
  }
  onSubmit() {

    if (!this.registerFormGroup.controls['pwd'].valid || !this.registerFormGroup.controls['pwd'].valid)
      return;

    this.register(this.registerFormGroup.get('email')!.value, this.registerFormGroup.get('pwd')!.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  constructor(private authService: AuthService, private router: Router) { }

  continueWithGoogle() {
    this.authService.GoogleAuth();
  }

  register(email: string, password: string){
    this.authService.SignUp(email,password);
  }
  
  redirectToLogin(){
    this.router.navigate(['auth/login'])
  }
}

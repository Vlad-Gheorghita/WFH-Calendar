import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { User } from 'src/app/libs/models/user';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {
  user: any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  redirectToLogin(){
    this.router.navigate(['auth/login']);
  }

  resendVerificationEmail(){
    this.authService.SendVerificationMail();
  }

}

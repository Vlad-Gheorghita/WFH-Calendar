import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    private afs: AngularFirestore, // Inject Firestore service
    private afAuth: AngularFireAuth, // Inject Firebase auth service
    private router: Router,
    private ngZone: NgZone, // NgZone service to remove outside scope warning
    private toastr: ToastrService
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up {} when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', '{}');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          localStorage.setItem('user', JSON.stringify(result.user));
          this.router.navigate(['app']);
        });
        // this.SetUserData(result.user);
      })
      .catch((error) => {
        // window.alert(error.message);
        this.toastr.error(error.message, "Log In Failed");
      });
  }
  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        localStorage.setItem('user', JSON.stringify(result.user));
        // this.router.navigate(['app']);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        // window.alert(error.message);
        this.toastr.error(error.message, "Registration Failed")
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['auth/verify-email']);
      });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        // window.alert('Password reset email sent, check your inbox.');
        this.toastr.info('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        // window.alert(error);
        this.toastr.error(error.message, "Something Went Wrong");
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
        this.router.navigate(['app']);
      }
    });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          localStorage.setItem('user', JSON.stringify(result.user));
          this.router.navigate(['app']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        // window.alert(error);
        this.toastr.error(error.message, "Something Went Wrong")
      });
  }
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email.toLowerCase(),
      displayName: user.email.substring(0, user.email.indexOf('@')).toLowerCase(),
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.setItem('user', '{}');
      this.router.navigate(['auth/login']);
    });
  }

  getUser(userId: string) {
    return this.afs.collection<User>('users', q => q.where('uid', '==', userId)).valueChanges();
  }
}

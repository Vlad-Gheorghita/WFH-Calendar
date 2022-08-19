import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isSettings = {settings: false};

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
  }

  getUser() {
    const userId = JSON.parse(localStorage.getItem('user')!).uid;
    return this.afs.doc<User>(`users/${userId}`).get();
  }

  updateUser(user: User) {
    return this.afs.doc(`users/${user.uid}`).update({ displayName: user.displayName, email: user.email });
  }

  changeUserPassword()
  { 

    const userEmail = JSON.parse(localStorage.getItem('user')!).email
    this.afAuth.sendPasswordResetEmail(userEmail);
  }
  
}

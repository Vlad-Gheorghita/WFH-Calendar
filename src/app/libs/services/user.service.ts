import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user$: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
  user = this.user$.asObservable();

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
      const userId = JSON.parse(localStorage.getItem('user')!).uid;
      this.getUser(userId).subscribe(result => {
        this.user$.next(result.data()!);
      })
   }

   getUser(userId: string){
      return this.afs.doc<User>(`users${userId}`).get();
   }

   updateUser(user: User){
      this.user$.next(user);
      return this.afs.doc(`users${user.uid}`).update({displayName: user.displayName, email: user.email});
   }
}

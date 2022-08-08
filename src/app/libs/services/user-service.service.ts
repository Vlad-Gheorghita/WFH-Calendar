import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private firestore: AngularFirestore) { }

  createUser(user: any) {
    var users = this.firestore.collection('users');

    return users.add(user);
  }
}

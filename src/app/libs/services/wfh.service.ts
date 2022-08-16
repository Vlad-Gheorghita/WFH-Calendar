
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Wfh } from '../models/wfh';

@Injectable({
  providedIn: 'root'
})
export class WfhService {

  constructor(private afs: AngularFirestore) { }

  addWfh(userId: string, workedMonth: string, workedYear: number) {
    const docId = this.afs.createId();
    const wfhRef: AngularFirestoreDocument<Wfh> = this.afs.doc(`workedMonths/${docId}`);

    const wfhData: Wfh = {
      uid: docId,
      userid: userId,
      daysWFH: [],
      monthName: workedMonth.toLowerCase(),
      year: workedYear
    }

    return wfhRef.set(wfhData, {
      merge: true
    });

  }

  getWfhByUserId(userId: string, month: string) {
    return this.afs.collection<Wfh>(
      'workedMonths', q => q.where('userid', '==', userId).where('monthName', '==', month.toLowerCase()))
      .valueChanges();
  }

  updateWfh(workedMonth: Wfh) {
      return this.afs.doc(`workedMonths/${workedMonth.uid}`).update({daysWFH: workedMonth.daysWFH});
  }
}

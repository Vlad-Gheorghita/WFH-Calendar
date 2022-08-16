
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Wfh } from '../models/wfh';

@Injectable({
  providedIn: 'root'
})
export class WfhService {

  constructor(private afs: AngularFirestore) { }

  addWfh(userId: string, workedDay: number, workedMonth: string, workedYear: number) {
    const docId = this.afs.createId();
    const wfhRef: AngularFirestoreDocument<Wfh> = this.afs.doc(`workedMonths/${docId}`);

    const wfhData: Wfh = {
      uid: docId,
      userid: userId,
      daysWFH: [workedDay],
      monthName: workedMonth.toLowerCase(),
      year: workedYear
    }

    return wfhRef.set(wfhData, {
      merge: true
    });

  }

  getWfhByUserId(userId: string, month: string) {
    var tst = this.afs.collection<Wfh>(
      'workedMonths', q => q.where('userid', '==', userId).where('monthName', '==', month.toLowerCase()))
      .valueChanges();

    return tst;
  }

  // updateWfh(uid: string, userId: string, workedDay: number, workedMonth: string, workedYear: number) {
  //   var wfh = this.getWfhByUserId(userId, workedMonth);
  //   if (wfh === undefined)
  //     return this.addWfh(userId, workedDay, workedMonth, workedYear);

  //   wfh.daysWFH.push(workedDay);
  //   return this.afs.doc(`workedMonths/${uid}`).update({ daysWFH: wfh.daysWFH })

  // }

  // private mapToWfh(document: any): Wfh {
  //   const wfh: Wfh = {
  //     uid: document.uid,
  //     userid: document.userid,
  //     daysWFH: document.daysWFH,
  //     monthName: document.monthName,
  //     year: document.year
  //   }

  //   return wfh;
  // }
}

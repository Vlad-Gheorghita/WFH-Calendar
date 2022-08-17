
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { Wfh } from '../models/wfh';
import { CalendarService } from './calendar.service';

@Injectable({
  providedIn: 'root'
})
export class WfhService {
  userId: string;
  private workedMonth: BehaviorSubject<Wfh> = new BehaviorSubject(new Wfh());

  constructor(private afs: AngularFirestore, private calendarService: CalendarService) {
    this.userId = JSON.parse(localStorage.getItem('user')!).uid;
   }

   get workedMonth$(){
    return this.workedMonth.asObservable();
   }

  addWfh(userId: string, workedMonth: string, workedYear: number): Wfh {
    const docId = this.afs.createId();
    const wfhRef: AngularFirestoreDocument<Wfh> = this.afs.doc(`workedMonths/${docId}`);

    const wfhData: Wfh = {
      uid: docId,
      userid: userId,
      daysWFH: [],
      monthName: workedMonth.toLowerCase(),
      year: workedYear
    }

    wfhRef.set(wfhData, {
      merge: true
    });

    return wfhData;

  }

  getWfhByUserId(userId: string, month: string) {
    return this.afs.collection<Wfh>(
      'workedMonths', q => q.where('userid', '==', userId).where('monthName', '==', month.toLowerCase())).get();
  }

  updateWfh(workedMonth: Wfh) {
    this.addToSubject(workedMonth);
    return this.afs.doc(`workedMonths/${workedMonth.uid}`).update({ daysWFH: workedMonth.daysWFH });
  }
  
  //OzxjJBvoNqU6T19mJ3gvu1UnGti2
  // getAll() {
  //   var tst = this.afs.collection<Wfh>('workedMonths',q => q.where('userid', '==', 'OzxjJBvoNqU6T19mJ3gvu1UnGti2')).get();

  //   tst.subscribe(r => {
  //    var ch = r.docs.map(a => a.data());
  //    console.log(ch);
  //   })
  // }

  createWfh() {
    const newWfh = this.addWfh(this.userId, this.calendarService.monthNameList[this.calendarService.date.getMonth()], this.calendarService.date.getFullYear());
    this.workedMonth.next(newWfh);
  }

  private addToSubject(data: Wfh){
    this.workedMonth.next(data);
  }
}

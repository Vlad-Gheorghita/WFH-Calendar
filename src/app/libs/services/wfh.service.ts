
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Wfh } from '../models/wfh';

@Injectable({
  providedIn: 'root'
})
export class WfhService {
  monthNameList: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  dayNameList: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(private afs: AngularFirestore) { }

  addWfh(userId: string, workedMonth: string, workedYear: number) {
    const docId = this.afs.createId();
    const wfhRef: AngularFirestoreDocument<Wfh> = this.afs.doc(`workedMonths/${docId}`);

    const wfhData: Wfh = {
      uid: docId,
      userid: userId,
      daysWFH: [],
      monthName: workedMonth.toLowerCase(),
      year: workedYear,
      workingDays: this.getNumberOfWorkingDays(workedMonth, workedYear)
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
    return this.afs.doc(`workedMonths/${workedMonth.uid}`).update({ daysWFH: workedMonth.daysWFH });
  }

  getNumberOfDaysInMonth(monthNumber: number): number {
    monthNumber++;
    if (monthNumber === 2) {
      return (this.checkLeapYear(new Date().getFullYear())) ? 29 : 28;
    }
    return (monthNumber <= 7 && monthNumber % 2 !== 0) || (monthNumber >= 8 && monthNumber % 2 === 0) ? 31 : 30;
  }

  private getNumberOfWorkingDays(monthName: string, year: number): number {
    var result = 0;
    var date = new Date(year, this.monthNameList.indexOf(monthName), 1);

    for (let i: number = 1; i <= this.getNumberOfDaysInMonth(date.getMonth()); i++) {
      date.setDate(i);
      (this.dayNameList[date.getDay()] !== "Saturday"
        && this.dayNameList[date.getDay()] !== "Sunday") ? result += 1 : result += 0;
    }

    return result;
  }

  private checkLeapYear(year: number): boolean {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }



}

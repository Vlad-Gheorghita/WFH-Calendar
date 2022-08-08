import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Firestore Modules
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  exports:[
    AngularFireModule,
    AngularFirestoreModule
  ]
})
export class FirebaseModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NavComponent } from './nav/nav.component';

//Material Navigation
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Buttons & Indicators
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/shared/shared.module';

//Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CoreComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
  ]
})
export class CoreModule { }

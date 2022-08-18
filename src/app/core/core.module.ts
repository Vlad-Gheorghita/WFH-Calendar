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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
//Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//Flex-Layout
import { FlexLayoutModule } from '@angular/flex-layout';

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
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }

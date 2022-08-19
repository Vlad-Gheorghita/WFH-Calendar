import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//Flex-Layout
import { FlexLayoutModule } from '@angular/flex-layout';
//Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
//Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
//Material Form Controls
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    SettingsComponent,
    AccountDetailsComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-left"
    }),
  ]
})
export class SettingsModule { }

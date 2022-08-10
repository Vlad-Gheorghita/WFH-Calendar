import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { DayCardComponent } from './day-card/day-card.component';

//Flex-Layout
import { FlexLayoutModule } from '@angular/flex-layout';

//Material Layout
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CalendarComponent,
    DayCardComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatCardModule,
    FlexLayoutModule,
  ]
})
export class CalendarModule { }

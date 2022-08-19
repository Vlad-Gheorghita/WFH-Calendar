import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'calendar',
        loadChildren: () => import('../apps/calendar/calendar.module').then(m => m.CalendarModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../apps/settings/settings.module').then(m => m.SettingsModule)
      },
      { path: '', pathMatch: 'full', redirectTo: 'calendar' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

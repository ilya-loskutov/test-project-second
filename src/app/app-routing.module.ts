import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoredActivitiesComponent } from 'bored-activities';

import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'activities',
    component: BoredActivitiesComponent
  },
  {
    path: '',
    component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

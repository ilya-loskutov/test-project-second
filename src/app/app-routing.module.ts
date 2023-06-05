import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoredActivitiesComponent } from 'bored-activities';

import { UserComponent } from './components/user/user.component';
import { navigationPaths } from './config/navigationPaths';

const routes: Routes = [
  {
    path: navigationPaths.users,
    component: UserComponent
  },
  {
    path: navigationPaths.boredActivities,
    component: BoredActivitiesComponent
  },
  {
    path: '**',
    redirectTo: navigationPaths.users
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

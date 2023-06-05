import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { navigationPaths } from './config/navigationPaths';

const routes: Routes = [
  {
    path: navigationPaths.users,
    component: UserComponent
  },
  {
    path: navigationPaths.boredActivities,
    loadChildren: () => import('../../projects/bored-activities/src/lib/bored-activities.module')
      .then(m => m.BoredActivitiesModule)
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

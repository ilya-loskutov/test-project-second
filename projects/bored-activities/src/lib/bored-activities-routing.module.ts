import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoredActivitiesComponent } from './bored-activities.component';

const routes: Routes = [
    {
        path: '',
        component: BoredActivitiesComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoredActivitiesRoutingModule { }
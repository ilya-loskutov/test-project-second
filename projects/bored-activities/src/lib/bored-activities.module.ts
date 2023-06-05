import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoredActivitiesRoutingModule } from './bored-activities-routing.module';
import { BoredActivitiesComponent } from './bored-activities.component';

@NgModule({
  declarations: [
    BoredActivitiesComponent
  ],
  imports: [
    CommonModule,
    BoredActivitiesRoutingModule,
  ],
  exports: [
    BoredActivitiesComponent
  ]
})
export class BoredActivitiesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoredActivitiesComponent } from './bored-activities.component';

@NgModule({
  declarations: [
    BoredActivitiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoredActivitiesComponent
  ]
})
export class BoredActivitiesModule { }

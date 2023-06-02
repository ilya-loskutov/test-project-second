import { NgModule } from '@angular/core';
import { BoredActivitiesComponent } from './bored-activities.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BoredActivitiesComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    BoredActivitiesComponent
  ]
})
export class BoredActivitiesModule { }

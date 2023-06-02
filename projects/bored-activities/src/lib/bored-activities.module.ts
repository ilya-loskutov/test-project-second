import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BoredActivitiesComponent } from './bored-activities.component';

import { LucidusModule } from '@solit/lucidus';

@NgModule({
  declarations: [
    BoredActivitiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LucidusModule.forRoot()
  ],
  exports: [
    BoredActivitiesComponent
  ]
})
export class BoredActivitiesModule { }

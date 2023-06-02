import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { BoredActivitiesComponent } from './bored-activities.component';

import { LucidusModule } from '@solit/lucidus';

@NgModule({
  declarations: [
    BoredActivitiesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    LucidusModule.forRoot()
  ],
  exports: [
    BoredActivitiesComponent
  ]
})
export class BoredActivitiesModule { }

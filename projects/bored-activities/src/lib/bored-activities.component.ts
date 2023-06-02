import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { BoredActivitiesService } from './bored-activities.service';
import { BoredActivity } from './models/bored-activity';

@Component({
  selector: 'ba-bored-activities',
  templateUrl: './bored-activities.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoredActivitiesComponent implements OnInit {

  constructor(
    private boredActivitiesServices: BoredActivitiesService
  ) {
    this.currentBoredActivity$ = boredActivitiesServices.currentActivity$;
  }

  public currentBoredActivity$: Observable<BoredActivity>;

  public ngOnInit(): void {
  }
}

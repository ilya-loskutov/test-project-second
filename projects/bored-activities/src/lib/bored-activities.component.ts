import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs';

import { BoredActivitiesService } from './bored-activities.service';
import { BoredActivity } from './models/bored-activity';

@Component({
  selector: 'ba-bored-activities',
  templateUrl: './bored-activities.component.html',
  styleUrls: ['./bored-activities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoredActivitiesComponent implements OnInit {

  constructor(
    private boredActivitiesServices: BoredActivitiesService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.currentBoredActivity$ = boredActivitiesServices.currentActivity$;
  }

  public currentBoredActivity$: Observable<BoredActivity>;

  public ngOnInit(): void {
  }

  public async requestNextActivity(): Promise<void> {
    this.isErrorMessageShown = false;
    this.isRequestNextActivityButtonDisabled = true;
    try {
      await this.boredActivitiesServices.requestNextActivity();
    }
    catch (error) {
      this.isErrorMessageShown = true;
    }
    this.isRequestNextActivityButtonDisabled = false;
    this.changeDetectorRef.markForCheck();
  }

  public isRequestNextActivityButtonDisabled: boolean = false;
  public isErrorMessageShown: boolean = false;
}

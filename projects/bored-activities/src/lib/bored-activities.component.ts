import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { BoredActivitiesService } from './bored-activities.service';
import { BoredActivity, LoadedActivity } from './models/bored-activity';

@Component({
  selector: 'ba-bored-activities',
  templateUrl: './bored-activities.component.html',
  styleUrls: ['./bored-activities.component.scss'],
  providers: [{ provide: BoredActivitiesService, useClass: BoredActivitiesService }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoredActivitiesComponent {

  constructor(
    private boredActivitiesService: BoredActivitiesService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.initializeLoadedActivity();
  }

  private initializeLoadedActivity(): void {
    this.loadedActivity$ = this.reload$.pipe(
      switchMap(() => this.boredActivitiesService.getNextActivity())
    );
  }

  public loadedActivity$!: Observable<LoadedActivity>;

  private reload$: BehaviorSubject<void> = new BehaviorSubject<void>(undefined);

  public requestNextActivity(): void {
    this.reload$.next();
  }
}

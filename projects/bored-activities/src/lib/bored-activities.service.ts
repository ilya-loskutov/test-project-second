import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';

import { BoredActivity, nullBoredActivity, LoadedActivity } from './models/bored-activity';
import { apiConfig } from './config/api.config';

export class BoredActivitiesService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getNextActivity(participants: number = 1, price: number = 0): Observable<LoadedActivity> {
    return this.httpClient.get<BoredActivity>(this.formRequestUrl(participants, price)).pipe(
      map((activity: BoredActivity) => {
        if (Math.random() < 0.5) {
          throw new Error('Data is not available');
        }
        return activity;
      }),
      map((activity: BoredActivity) => new LoadedActivity(activity)),
      catchError((error: any) => of(new LoadedActivity(undefined, error))),
      startWith(new LoadedActivity())
    )
  }

  private formRequestUrl(participants: number, price: number): string {
    return `${apiConfig.url}?participants=${participants}&price=${price}`;
  }
}

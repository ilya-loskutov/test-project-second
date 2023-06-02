import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { BoredActivity, nullBoredActivity } from './models/bored-activity';
import { apiConfig } from './config/api.config';

@Injectable({
  providedIn: 'root'
})
export class BoredActivitiesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get currentActivity$(): Observable<BoredActivity> {
    return this._currentActivity$;
  }

  private _currentActivity$: BehaviorSubject<BoredActivity> = new BehaviorSubject<BoredActivity>(nullBoredActivity);

  async requestNextActivity(participants: number = 1, price: number = 0): Promise<void> {
    const nextActivity: BoredActivity = await this.httpClient.get<BoredActivity>(this.formRequestUrl(participants, price))
      .toPromise();
    if (Math.random() < 0.5) {
      throw new Error('Data is not available');
    }
    this._currentActivity$.next(nextActivity);
  }

  private formRequestUrl(participants: number, price: number): string {
    return `${apiConfig.url}?participants=${participants}&price=${price}`;
  }
}

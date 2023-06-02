import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

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
    this._currentActivity$.next(nextActivity);
  }

  private formRequestUrl(participants: number, price: number): string {
    return `${apiConfig.url}?participants=${participants}&price=${price}`;
  }
}

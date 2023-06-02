import { TestBed } from '@angular/core/testing';

import { BoredActivitiesService } from './bored-activities.service';

describe('BoredActivitiesService', () => {
  let service: BoredActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoredActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

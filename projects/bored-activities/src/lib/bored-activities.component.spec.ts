import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredActivitiesComponent } from './bored-activities.component';

describe('BoredActivitiesComponent', () => {
  let component: BoredActivitiesComponent;
  let fixture: ComponentFixture<BoredActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoredActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoredActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

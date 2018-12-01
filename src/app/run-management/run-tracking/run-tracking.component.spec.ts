import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunTrackingComponent } from './run-tracking.component';

describe('RunTrackingComponent', () => {
  let component: RunTrackingComponent;
  let fixture: ComponentFixture<RunTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

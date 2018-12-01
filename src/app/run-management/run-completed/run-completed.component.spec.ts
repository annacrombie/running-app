import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunCompletedComponent } from './run-completed.component';

describe('RunCompletedComponent', () => {
  let component: RunCompletedComponent;
  let fixture: ComponentFixture<RunCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

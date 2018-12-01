import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathListingComponent } from './path-listing.component';

describe('PathListingComponent', () => {
  let component: PathListingComponent;
  let fixture: ComponentFixture<PathListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

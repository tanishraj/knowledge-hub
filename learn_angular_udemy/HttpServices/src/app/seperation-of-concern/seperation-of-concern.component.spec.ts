import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeperationOfConcernComponent } from './seperation-of-concern.component';

describe('SeperationOfConcernComponent', () => {
  let component: SeperationOfConcernComponent;
  let fixture: ComponentFixture<SeperationOfConcernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeperationOfConcernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeperationOfConcernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

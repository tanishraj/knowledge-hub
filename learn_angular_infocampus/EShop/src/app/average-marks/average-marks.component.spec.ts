import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageMarksComponent } from './average-marks.component';

describe('AverageMarksComponent', () => {
  let component: AverageMarksComponent;
  let fixture: ComponentFixture<AverageMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

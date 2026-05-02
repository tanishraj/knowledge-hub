import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfAnotherComponent } from './ng-if-another.component';

describe('NgIfAnotherComponent', () => {
  let component: NgIfAnotherComponent;
  let fixture: ComponentFixture<NgIfAnotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfAnotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

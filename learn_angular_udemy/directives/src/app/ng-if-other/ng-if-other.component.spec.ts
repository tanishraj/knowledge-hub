import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfOtherComponent } from './ng-if-other.component';

describe('NgIfOtherComponent', () => {
  let component: NgIfOtherComponent;
  let fixture: ComponentFixture<NgIfOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingDataComponent } from './getting-data.component';

describe('GettingDataComponent', () => {
  let component: GettingDataComponent;
  let fixture: ComponentFixture<GettingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

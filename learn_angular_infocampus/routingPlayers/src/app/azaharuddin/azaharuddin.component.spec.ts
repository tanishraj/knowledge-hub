import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzaharuddinComponent } from './azaharuddin.component';

describe('AzaharuddinComponent', () => {
  let component: AzaharuddinComponent;
  let fixture: ComponentFixture<AzaharuddinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzaharuddinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzaharuddinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDynamicFormComponent } from './company-dynamic-form.component';

describe('CompanyDynamicFormComponent', () => {
  let component: CompanyDynamicFormComponent;
  let fixture: ComponentFixture<CompanyDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

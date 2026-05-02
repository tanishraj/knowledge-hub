import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingUsingAppSpecificErrorComponent } from './error-handling-using-app-specific-error.component';

describe('ErrorHandlingUsingAppSpecificErrorComponent', () => {
  let component: ErrorHandlingUsingAppSpecificErrorComponent;
  let fixture: ComponentFixture<ErrorHandlingUsingAppSpecificErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorHandlingUsingAppSpecificErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHandlingUsingAppSpecificErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

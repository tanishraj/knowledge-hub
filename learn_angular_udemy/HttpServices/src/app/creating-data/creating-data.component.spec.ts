import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingDataComponent } from './creating-data.component';

describe('CreatingDataComponent', () => {
  let component: CreatingDataComponent;
  let fixture: ComponentFixture<CreatingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

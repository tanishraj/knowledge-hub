import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PePipesComponent } from './pe-pipes.component';

describe('PePipesComponent', () => {
  let component: PePipesComponent;
  let fixture: ComponentFixture<PePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

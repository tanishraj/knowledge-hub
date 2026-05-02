import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePostsComponent } from './observable-posts.component';

describe('ObservablePostsComponent', () => {
  let component: ObservablePostsComponent;
  let fixture: ComponentFixture<ObservablePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

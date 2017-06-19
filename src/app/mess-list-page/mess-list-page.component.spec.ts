import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessListPageComponent } from './mess-list-page.component';

describe('MessListPageComponent', () => {
  let component: MessListPageComponent;
  let fixture: ComponentFixture<MessListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

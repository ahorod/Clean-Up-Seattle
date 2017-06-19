import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessDetailComponent } from './mess-detail.component';

describe('MessDetailComponent', () => {
  let component: MessDetailComponent;
  let fixture: ComponentFixture<MessDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessesListComponent } from './messes-list.component';

describe('MessesListComponent', () => {
  let component: MessesListComponent;
  let fixture: ComponentFixture<MessesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

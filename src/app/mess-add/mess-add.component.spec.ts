import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessAddComponent } from './mess-add.component';

describe('MessAddComponent', () => {
  let component: MessAddComponent;
  let fixture: ComponentFixture<MessAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

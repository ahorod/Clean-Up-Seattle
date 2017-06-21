import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMeetupsComponent } from './update-meetups.component';

describe('UpdateMeetupsComponent', () => {
  let component: UpdateMeetupsComponent;
  let fixture: ComponentFixture<UpdateMeetupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMeetupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMeetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

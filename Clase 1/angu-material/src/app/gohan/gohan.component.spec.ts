import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GohanComponent } from './gohan.component';

describe('GohanComponent', () => {
  let component: GohanComponent;
  let fixture: ComponentFixture<GohanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GohanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GohanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

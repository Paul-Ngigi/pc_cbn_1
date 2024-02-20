import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetZeroAllGoalsComponent } from './net-zero-all-goals.component';

describe('NetZeroAllGoalsComponent', () => {
  let component: NetZeroAllGoalsComponent;
  let fixture: ComponentFixture<NetZeroAllGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetZeroAllGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetZeroAllGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

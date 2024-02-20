import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopSectionComponent } from './dashboard-top-section.component';

describe('DashboardTopSectionComponent', () => {
  let component: DashboardTopSectionComponent;
  let fixture: ComponentFixture<DashboardTopSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTopSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

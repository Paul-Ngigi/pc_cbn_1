import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableComparisonChartComponent } from './reusable-comparison-chart.component';

describe('ReusableComparisonChartComponent', () => {
  let component: ReusableComparisonChartComponent;
  let fixture: ComponentFixture<ReusableComparisonChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableComparisonChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableComparisonChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

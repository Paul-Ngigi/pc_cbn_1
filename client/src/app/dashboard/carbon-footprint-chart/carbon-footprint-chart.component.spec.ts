import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonFootprintChartComponent } from './carbon-footprint-chart.component';

describe('CarbonFootprintChartComponent', () => {
  let component: CarbonFootprintChartComponent;
  let fixture: ComponentFixture<CarbonFootprintChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarbonFootprintChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonFootprintChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

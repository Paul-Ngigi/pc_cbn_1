import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scope3EmissionSourcesChartComponent } from './scope3-emission-sources-chart.component';

describe('Scope3EmissionSourcesChartComponent', () => {
  let component: Scope3EmissionSourcesChartComponent;
  let fixture: ComponentFixture<Scope3EmissionSourcesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scope3EmissionSourcesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scope3EmissionSourcesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scope2EmissionSourcesChartComponent } from './scope2-emission-sources-chart.component';

describe('Scope2EmissionSourcesChartComponent', () => {
  let component: Scope2EmissionSourcesChartComponent;
  let fixture: ComponentFixture<Scope2EmissionSourcesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scope2EmissionSourcesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scope2EmissionSourcesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

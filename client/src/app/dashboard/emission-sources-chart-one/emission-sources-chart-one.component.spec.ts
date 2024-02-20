import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionSourcesChartOneComponent } from './emission-sources-chart-one.component';

describe('EmissionSourcesChartOneComponent', () => {
  let component: EmissionSourcesChartOneComponent;
  let fixture: ComponentFixture<EmissionSourcesChartOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissionSourcesChartOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmissionSourcesChartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

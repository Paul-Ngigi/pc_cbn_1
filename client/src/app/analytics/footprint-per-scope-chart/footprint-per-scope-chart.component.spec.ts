import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootprintPerScopeChartComponent } from './footprint-per-scope-chart.component';

describe('FootprintPerScopeChartComponent', () => {
  let component: FootprintPerScopeChartComponent;
  let fixture: ComponentFixture<FootprintPerScopeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootprintPerScopeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootprintPerScopeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableEmissionAnalysisCardComponent } from './reusable-emission-analysis-card.component';

describe('ReusableEmissionAnalysisCardComponent', () => {
  let component: ReusableEmissionAnalysisCardComponent;
  let fixture: ComponentFixture<ReusableEmissionAnalysisCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableEmissionAnalysisCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableEmissionAnalysisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

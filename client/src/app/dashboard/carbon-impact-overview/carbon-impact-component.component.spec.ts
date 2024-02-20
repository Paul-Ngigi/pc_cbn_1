import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonImpactComponentComponent } from './carbon-impact-component.component';

describe('CarbonImpactComponentComponent', () => {
  let component: CarbonImpactComponentComponent;
  let fixture: ComponentFixture<CarbonImpactComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarbonImpactComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonImpactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

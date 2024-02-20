import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityConsumptionFormComponent } from './electricity-consumption-form.component';

describe('ElectricityConsumptionFormComponent', () => {
  let component: ElectricityConsumptionFormComponent;
  let fixture: ComponentFixture<ElectricityConsumptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityConsumptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityConsumptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

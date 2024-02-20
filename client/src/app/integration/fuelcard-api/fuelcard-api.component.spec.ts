import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelcardApiComponent } from './fuelcard-api.component';

describe('FuelcardApiComponent', () => {
  let component: FuelcardApiComponent;
  let fixture: ComponentFixture<FuelcardApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelcardApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelcardApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

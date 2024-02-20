import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetCalculatorComponent } from './offset-calculator.component';

describe('OffsetCalculatorComponent', () => {
  let component: OffsetCalculatorComponent;
  let fixture: ComponentFixture<OffsetCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffsetCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffsetCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

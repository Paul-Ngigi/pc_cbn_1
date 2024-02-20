import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetcalculatorComponent } from './offsetcalculator.component';

describe('OffsetcalculatorComponent', () => {
  let component: OffsetcalculatorComponent;
  let fixture: ComponentFixture<OffsetcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffsetcalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffsetcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDropdownComponent } from './monthly-dropdown.component';

describe('MonthlyDropdownComponent', () => {
  let component: MonthlyDropdownComponent;
  let fixture: ComponentFixture<MonthlyDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

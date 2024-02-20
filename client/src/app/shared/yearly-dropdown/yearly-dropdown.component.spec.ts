import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyDropdownComponent } from './yearly-dropdown.component';

describe('YearlyDropdownComponent', () => {
  let component: YearlyDropdownComponent;
  let fixture: ComponentFixture<YearlyDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearlyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

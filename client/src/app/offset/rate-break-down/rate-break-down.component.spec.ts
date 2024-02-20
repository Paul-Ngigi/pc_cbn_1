import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateBreakDownComponent } from './rate-break-down.component';

describe('RateBreakDownComponent', () => {
  let component: RateBreakDownComponent;
  let fixture: ComponentFixture<RateBreakDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateBreakDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateBreakDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

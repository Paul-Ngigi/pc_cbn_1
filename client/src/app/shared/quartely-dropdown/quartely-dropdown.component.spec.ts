import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartelyDropdownComponent } from './quartely-dropdown.component';

describe('QuartelyDropdownComponent', () => {
  let component: QuartelyDropdownComponent;
  let fixture: ComponentFixture<QuartelyDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartelyDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartelyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

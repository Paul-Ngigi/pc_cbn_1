import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeOneBreakdownComponent } from './scope-one-breakdown.component';

describe('ScopeOneBreakdownComponent', () => {
  let component: ScopeOneBreakdownComponent;
  let fixture: ComponentFixture<ScopeOneBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopeOneBreakdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopeOneBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

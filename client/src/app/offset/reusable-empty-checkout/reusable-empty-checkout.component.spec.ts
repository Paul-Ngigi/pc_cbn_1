import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableEmptyCheckoutComponent } from './reusable-empty-checkout.component';

describe('ReusableEmptyCheckoutComponent', () => {
  let component: ReusableEmptyCheckoutComponent;
  let fixture: ComponentFixture<ReusableEmptyCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableEmptyCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableEmptyCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

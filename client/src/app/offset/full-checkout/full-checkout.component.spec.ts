import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCheckoutComponent } from './full-checkout.component';

describe('FullCheckoutComponent', () => {
  let component: FullCheckoutComponent;
  let fixture: ComponentFixture<FullCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

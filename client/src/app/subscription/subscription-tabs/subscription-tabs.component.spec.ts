import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTabsComponent } from './subscription-tabs.component';

describe('SubscriptionTabsComponent', () => {
  let component: SubscriptionTabsComponent;
  let fixture: ComponentFixture<SubscriptionTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

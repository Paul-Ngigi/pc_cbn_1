import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableIntegrationCardComponent } from './reusable-integration-card.component';

describe('ReusableIntegrationCardComponent', () => {
  let component: ReusableIntegrationCardComponent;
  let fixture: ComponentFixture<ReusableIntegrationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableIntegrationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableIntegrationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

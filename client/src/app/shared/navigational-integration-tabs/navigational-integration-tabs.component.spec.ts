import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationalIntegrationTabsComponent } from './navigational-integration-tabs.component';

describe('NavigationalIntegrationTabsComponent', () => {
  let component: NavigationalIntegrationTabsComponent;
  let fixture: ComponentFixture<NavigationalIntegrationTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationalIntegrationTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationalIntegrationTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

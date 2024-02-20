import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableScopeDataCardComponent } from './reusable-scope-data-card.component';

describe('ReusableScopeDataCardComponent', () => {
  let component: ReusableScopeDataCardComponent;
  let fixture: ComponentFixture<ReusableScopeDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableScopeDataCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableScopeDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

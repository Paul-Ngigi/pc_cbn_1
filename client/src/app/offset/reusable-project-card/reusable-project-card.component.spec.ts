import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableProjectCardComponent } from './reusable-project-card.component';

describe('ReusableProjectCardComponent', () => {
  let component: ReusableProjectCardComponent;
  let fixture: ComponentFixture<ReusableProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableProjectCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

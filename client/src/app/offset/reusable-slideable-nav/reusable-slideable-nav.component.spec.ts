import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableSlideableNavComponent } from './reusable-slideable-nav.component';

describe('ReusableSlideableNavComponent', () => {
  let component: ReusableSlideableNavComponent;
  let fixture: ComponentFixture<ReusableSlideableNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableSlideableNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableSlideableNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

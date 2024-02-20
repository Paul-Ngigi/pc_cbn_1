import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetRatioComponent } from './offset-ratio.component';

describe('OffsetRatioComponent', () => {
  let component: OffsetRatioComponent;
  let fixture: ComponentFixture<OffsetRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffsetRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffsetRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

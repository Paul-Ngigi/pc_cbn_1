import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTrackingGraphComponent } from './progress-tracking-graph.component';

describe('ProgressTrackingGraphComponent', () => {
  let component: ProgressTrackingGraphComponent;
  let fixture: ComponentFixture<ProgressTrackingGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressTrackingGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressTrackingGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetzeroGoalsComponent } from './netzero-goals.component';

describe('NetzeroGoalsComponent', () => {
  let component: NetzeroGoalsComponent;
  let fixture: ComponentFixture<NetzeroGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetzeroGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetzeroGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

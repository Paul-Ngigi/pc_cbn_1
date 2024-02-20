import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionAndReductionCardsComponent } from './emission-and-reduction-cards.component';

describe('EmissionAndReductionCardsComponent', () => {
  let component: EmissionAndReductionCardsComponent;
  let fixture: ComponentFixture<EmissionAndReductionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissionAndReductionCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmissionAndReductionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

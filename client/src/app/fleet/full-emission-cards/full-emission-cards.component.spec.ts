import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullEmissionCardsComponent } from './full-emission-cards.component';

describe('FullEmissionCardsComponent', () => {
  let component: FullEmissionCardsComponent;
  let fixture: ComponentFixture<FullEmissionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullEmissionCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullEmissionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

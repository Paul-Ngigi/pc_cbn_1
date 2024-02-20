import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactCardsComponent } from './impact-cards.component';

describe('ImpactCardsComponent', () => {
  let component: ImpactCardsComponent;
  let fixture: ComponentFixture<ImpactCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

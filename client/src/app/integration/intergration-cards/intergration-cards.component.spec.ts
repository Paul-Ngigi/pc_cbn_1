import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntergrationCardsComponent } from './intergration-cards.component';

describe('IntergrationCardsComponent', () => {
  let component: IntergrationCardsComponent;
  let fixture: ComponentFixture<IntergrationCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntergrationCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntergrationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

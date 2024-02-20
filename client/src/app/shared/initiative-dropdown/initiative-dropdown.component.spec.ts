import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeDropdownComponent } from './initiative-dropdown.component';

describe('InitiativeDropdownComponent', () => {
  let component: InitiativeDropdownComponent;
  let fixture: ComponentFixture<InitiativeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiativeDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiativeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

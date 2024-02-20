import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonButtonComponent } from './button-button.component';

describe('ButtonButtonComponent', () => {
  let component: ButtonButtonComponent;
  let fixture: ComponentFixture<ButtonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

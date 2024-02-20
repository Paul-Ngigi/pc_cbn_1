import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationPinComponent } from './location-pin.component';

describe('LocationPinComponent', () => {
  let component: LocationPinComponent;
  let fixture: ComponentFixture<LocationPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationPinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

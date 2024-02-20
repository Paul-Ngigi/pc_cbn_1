import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishRegistrationProcessComponent } from './finish-registration-process.component';

describe('FinishRegistrationProcessComponent', () => {
  let component: FinishRegistrationProcessComponent;
  let fixture: ComponentFixture<FinishRegistrationProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishRegistrationProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishRegistrationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationLoaderComponent } from './verification-loader.component';

describe('VerificationLoaderComponent', () => {
  let component: VerificationLoaderComponent;
  let fixture: ComponentFixture<VerificationLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

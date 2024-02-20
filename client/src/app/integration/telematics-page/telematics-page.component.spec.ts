import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelematicsPageComponent } from './telematics-page.component';

describe('TelematicsPageComponent', () => {
  let component: TelematicsPageComponent;
  let fixture: ComponentFixture<TelematicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelematicsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelematicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

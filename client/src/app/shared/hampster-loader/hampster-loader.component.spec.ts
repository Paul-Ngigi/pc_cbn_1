import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HampsterLoaderComponent } from './hampster-loader.component';

describe('HampsterLoaderComponent', () => {
  let component: HampsterLoaderComponent;
  let fixture: ComponentFixture<HampsterLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HampsterLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HampsterLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

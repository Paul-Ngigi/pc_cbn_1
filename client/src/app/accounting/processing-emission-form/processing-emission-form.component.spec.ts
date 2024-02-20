import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingEmissionFormComponent } from './processing-emission-form.component';

describe('ProcessingEmissionFormComponent', () => {
  let component: ProcessingEmissionFormComponent;
  let fixture: ComponentFixture<ProcessingEmissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingEmissionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessingEmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

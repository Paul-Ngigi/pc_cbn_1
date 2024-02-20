import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FugitiveEmissionFormComponent } from './fugitive-emission-form.component';

describe('FugitiveEmissionFormComponent', () => {
  let component: FugitiveEmissionFormComponent;
  let fixture: ComponentFixture<FugitiveEmissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FugitiveEmissionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FugitiveEmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

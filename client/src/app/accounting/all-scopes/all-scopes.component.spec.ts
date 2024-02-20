import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllScopesComponent } from './all-scopes.component';

describe('AllScopesComponent', () => {
  let component: AllScopesComponent;
  let fixture: ComponentFixture<AllScopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllScopesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllScopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

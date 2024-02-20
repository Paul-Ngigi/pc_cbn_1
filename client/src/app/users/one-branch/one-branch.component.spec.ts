import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBranchComponent } from './one-branch.component';

describe('OneBranchComponent', () => {
  let component: OneBranchComponent;
  let fixture: ComponentFixture<OneBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

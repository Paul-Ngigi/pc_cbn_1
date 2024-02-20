import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTopSectionComponent } from './users-top-section.component';

describe('UsersTopSectionComponent', () => {
  let component: UsersTopSectionComponent;
  let fixture: ComponentFixture<UsersTopSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTopSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersTopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

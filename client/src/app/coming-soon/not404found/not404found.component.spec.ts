import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Not404foundComponent } from './not404found.component';

describe('Not404foundComponent', () => {
  let component: Not404foundComponent;
  let fixture: ComponentFixture<Not404foundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Not404foundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Not404foundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

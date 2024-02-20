import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableSlidableTabComponent } from './reusable-slidable-tab.component';

describe('ReusableSlidableTabComponent', () => {
  let component: ReusableSlidableTabComponent;
  let fixture: ComponentFixture<ReusableSlidableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableSlidableTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableSlidableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

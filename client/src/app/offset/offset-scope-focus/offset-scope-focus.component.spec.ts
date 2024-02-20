import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetScopeFocusComponent } from './offset-scope-focus.component';

describe('OffsetScopeFocusComponent', () => {
  let component: OffsetScopeFocusComponent;
  let fixture: ComponentFixture<OffsetScopeFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffsetScopeFocusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffsetScopeFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

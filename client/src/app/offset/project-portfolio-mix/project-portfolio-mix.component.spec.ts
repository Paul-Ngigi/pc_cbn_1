import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPortfolioMixComponent } from './project-portfolio-mix.component';

describe('ProjectPortfolioMixComponent', () => {
  let component: ProjectPortfolioMixComponent;
  let fixture: ComponentFixture<ProjectPortfolioMixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPortfolioMixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPortfolioMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

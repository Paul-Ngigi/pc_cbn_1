import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPortfolio } from 'src/app/interfaces/portfolio.interface';

@Component({
  selector: 'app-single-portfolio',
  templateUrl: './single-portfolio.component.html',
  styleUrls: ['./single-portfolio.component.scss'],
})
export class SinglePortfolioComponent {
  @Input() portfolio: IPortfolio;
  progressValue: number = 30;

  constructor(private router: Router) {}

  buyOffset(id: string) {
    this.router.navigate(['offset/project-details', id]);
  }
}

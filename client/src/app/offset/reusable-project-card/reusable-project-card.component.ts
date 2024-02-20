import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/interfaces/project.interface';
import { IPortfolio } from 'src/app/interfaces/portfolio.interface';

@Component({
  selector: 'app-reusable-project-card',
  templateUrl: './reusable-project-card.component.html',
  styleUrls: ['./reusable-project-card.component.scss'],
})
export class ReusableProjectCardComponent {
  @Input() portfolio: IPortfolio;
  progressValue: number = 30;

  constructor(private router: Router) {}
  buyCarbonCredits(_id: string) {    
    this.router.navigate(['offset/project-details'], {
      queryParams: { _id: _id },
    });
  }
}

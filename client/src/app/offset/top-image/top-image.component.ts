import { Component } from '@angular/core';
import { IProject } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-top-image',
  templateUrl: './top-image.component.html',
  styleUrls: ['./top-image.component.scss'],
})
export class TopImageComponent {
  project: IProject = {
    image: '/assets/images/cooking_image.svg',
    label: 'Clean Cooking',
    partner: 'Total Kenya', 
    description:
      'Burn is a project that allow families in rural Kenya to cook food using cleaner, More efficient cookstoves. Communities typically use wood and charcoal to fuel open fires, creating indoor air pollution, releasing CO2 emissions and putting pressure on local forests.',
    location: 'Kenya',
    year: 2023,
    startPrice: 25,
    finalPrice: 30,
    availableCredits: 1500,
    _id: 'd8sa7jsa9nasb7n8',
  };
}

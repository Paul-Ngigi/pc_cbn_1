import { Component } from '@angular/core';

@Component({
  selector: 'app-impact-cards',
  templateUrl: './impact-cards.component.html',
  styleUrls: ['./impact-cards.component.scss'],
})
export class ImpactCardsComponent {
  years: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
}

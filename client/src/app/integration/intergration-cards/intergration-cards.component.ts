import { Component } from '@angular/core';
import { ICompanyIntergration } from 'src/app/interfaces/company.intergration.interface';

@Component({
  selector: 'app-intergration-cards',
  templateUrl: './intergration-cards.component.html',
  styleUrls: ['./intergration-cards.component.scss'],
})
export class IntergrationCardsComponent {
  companies: ICompanyIntergration[] = [
    {
      logo: 'data:image/png;base64,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',
      name: 'Shell',
      description: 'Connect to Shell fuel cards accounts through our API endpoints for fueling transaction data',
      apiUrl: '',
    },
    {
      logo: '/assets/images/total.svg',
      name: 'Total Energies',
      description: 'Connect to Total fuel cards accounts through our API endpoints for fueling transaction data',
      apiUrl: '',
    },
    {
      logo: '/assets/images/rubis.svg',
      name: 'Rubis Energies',
      description: 'Connect to Rubis fuel cards accounts through our API endpoints for fueling transaction data',
      apiUrl: '',
    },
    {
      logo: '/assets/images/hashi.svg',
      name: 'Hashi Energies',
      description: 'Connect to Hashi fuel cards accounts through our API endpoints for fueling transaction data',
      apiUrl: '',
    },
    {
      logo: '/assets/images/hass.svg',
      name: 'Hass Energies',
      description: 'Connect to Hass fuel cards accounts through our API endpoints for fueling transaction data',
      apiUrl: '',
    },
    {
      logo: '/assets/images/ola.svg',
      name: 'Ola Africa',
      description: 'Connect to Ola Africa fuel cards accounts through our API endpoints for fueling transaction data',
      apiUrl: '',
    },
  ];
}

import { Component } from '@angular/core';
import { ICompanyIntergration } from 'src/app/interfaces/company.intergration.interface';

@Component({
  selector: 'app-fuelcard-api',
  templateUrl: './fuelcard-api.component.html',
  styleUrls: ['./fuelcard-api.component.scss']
})
export class FuelcardApiComponent {
  fuelcards: ICompanyIntergration[] = [
    {
      logo: '/assets/images/Google.svg',
      name: 'Private Beta',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      apiUrl: '',
    },
  ];
}

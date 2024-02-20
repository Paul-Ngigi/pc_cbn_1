import { Component } from '@angular/core';
import { ICompanyIntergration } from 'src/app/interfaces/company.intergration.interface';

@Component({
  selector: 'app-telematics-page',
  templateUrl: './telematics-page.component.html',
  styleUrls: ['./telematics-page.component.scss']
})
export class TelematicsPageComponent {

  telematics: ICompanyIntergration[] = [
    {
      logo: '/assets/svgs/Vector.svg',
      name: '',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      apiUrl: '',
    },
    {
      logo: 'https://img.freepik.com/free-vector/twitter-logo-design_1035-8934.jpg?w=740&t=st=1689321467~exp=1689322067~hmac=91f85cc850bd3bf8bf5cb1cbb08c79709bbbcac7eeee141a67968f09c138d751',
      name: '',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      apiUrl: '',
    },
    {
      logo: '/assets/svgs/Vector (2).svg',
      name: '',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      apiUrl: '',
    },
  ];

}

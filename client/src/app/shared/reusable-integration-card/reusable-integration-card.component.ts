import { Component, Input } from '@angular/core';
import { ICompanyIntergration } from 'src/app/interfaces/company.intergration.interface';

@Component({
  selector: 'app-reusable-integration-card',
  templateUrl: './reusable-integration-card.component.html',
  styleUrls: ['./reusable-integration-card.component.scss'],
})
export class ReusableIntegrationCardComponent {
  @Input() company!: ICompanyIntergration;

  makeApiRequest(url: string) {
    
  }
}

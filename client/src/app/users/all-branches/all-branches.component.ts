import { Component } from '@angular/core';
import { IBranch } from 'src/app/interfaces/branches.interface';

@Component({
  selector: 'app-all-branches',
  templateUrl: './all-branches.component.html',
  styleUrls: ['./all-branches.component.scss']
})
export class AllBranchesComponent {
  branches: IBranch[] = [
    {
      name: 'Comp Uganda',
      division: 'No Subdivision',
      image1: '/assets/images/Rectangle 3876.png',
      image2: '/assets/images/Rectangle 3878.png',
      image3: '/assets/images/Rectangle 3877.png'
    },
    {
      name: 'Comp Kenya',
      division: 'No Subdivision',
      image1: '/assets/images/Rectangle 3876.png',
      image2: '/assets/images/Rectangle 3878.png',
      image3: '/assets/images/Rectangle 3877.png'
    },
    {
      name: 'Comp Nairobi',
      division: 'No Subdivision',
      image1: '/assets/images/Rectangle 3876.png',
      image2: '/assets/images/Rectangle 3878.png',
      image3: '/assets/images/Rectangle 3877.png'
    },
    {
      name: 'Add New Division',
      division: 'No Subdivision',
      image1: '/assets/images/Rectangle 3876.png',
      image2: '/assets/images/Rectangle 3878.png',
      image3: '/assets/images/Rectangle 3877.png'
    },
  ]
}

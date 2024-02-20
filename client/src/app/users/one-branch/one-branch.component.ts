import { Component, Input } from '@angular/core';
import { IBranch } from 'src/app/interfaces/branches.interface';

@Component({
  selector: 'app-one-branch',
  templateUrl: './one-branch.component.html',
  styleUrls: ['./one-branch.component.scss']
})
export class OneBranchComponent {

  @Input() branch!: IBranch;

}

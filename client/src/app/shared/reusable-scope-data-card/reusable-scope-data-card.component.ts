import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IEmission, IEmissionItem } from 'src/app/interfaces/emission';

@Component({
  selector: 'app-reusable-scope-data-card',
  templateUrl: './reusable-scope-data-card.component.html',
  styleUrls: ['./reusable-scope-data-card.component.scss']
})
export class ReusableScopeDataCardComponent {

  @Input() emission!: IEmissionItem;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    // this.dialog.open(DialogComponent, {data:this.emission});
    }
}


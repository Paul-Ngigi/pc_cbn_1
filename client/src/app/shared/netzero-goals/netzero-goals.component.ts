import { Component, Input } from '@angular/core';
import { INetzero } from 'src/app/interfaces/netzero.interface';

@Component({
  selector: 'app-netzero-goals',
  templateUrl: './netzero-goals.component.html',
  styleUrls: ['./netzero-goals.component.scss']
})
export class NetzeroGoalsComponent {

  @Input() netzero!: INetzero;

}
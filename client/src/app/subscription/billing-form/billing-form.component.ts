import { Component, Input } from '@angular/core';
import { map, timer, takeWhile } from 'rxjs';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.scss']
})
export class BillingFormComponent {

  @Input() seconds = 600;

  timeRemaining$ = timer(0, 1000).pipe(
    map(n => (this.seconds - n) * 1000),
    takeWhile(n => n >= 0),
  );

}

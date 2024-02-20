import { Component } from '@angular/core';

@Component({
  selector: 'app-rate-break-down',
  templateUrl: './rate-break-down.component.html',
  styleUrls: ['./rate-break-down.component.scss']
})
export class RateBreakDownComponent {
  selectedOption: string;
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];

}

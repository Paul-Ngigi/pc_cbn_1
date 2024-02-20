import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quartely-dropdown',
  templateUrl: './quartely-dropdown.component.html',
  styleUrls: ['./quartely-dropdown.component.scss'],
})
export class QuartelyDropdownComponent {
  @Output() periodEvent = new EventEmitter<String>();

  periods: string[] = ['Monthly', 'Quarterly', 'Yearly'];

  onPeriodChange(selectedPeriod: string) {
    this.periodEvent.emit(selectedPeriod);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-monthly-dropdown',
  templateUrl: './monthly-dropdown.component.html',
  styleUrls: ['./monthly-dropdown.component.scss'],
})
export class MonthlyDropdownComponent {
  @Output() monthlyEvent = new EventEmitter<String>();

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  onMonthChange(selectedMonth: string) {
    this.monthlyEvent.emit(selectedMonth);
  }
}

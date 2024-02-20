import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-yearly-dropdown',
  templateUrl: './yearly-dropdown.component.html',
  styleUrls: ['./yearly-dropdown.component.scss'],
})
export class YearlyDropdownComponent {
  @Output() yearlyEvent = new EventEmitter<Number>();

  years: number[] = [];

  ngOnInit(): void {
    const startYear = new Date().getFullYear();
    const maxYear = 2100;     
    for (var year = startYear; year <= maxYear; year++) {
      this.years.push(year);      
    }    
  }

  onYearChange(selectedYear: number) {
    this.yearlyEvent.emit(selectedYear);
  }
}

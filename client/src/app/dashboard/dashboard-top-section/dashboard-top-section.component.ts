import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-top-section',
  templateUrl: './dashboard-top-section.component.html',
  styleUrls: ['./dashboard-top-section.component.scss'],
})
export class DashboardTopSectionComponent {
  date: Date = new Date();
  tabs: string[] = ['Emission Overview', 'Scope 1', 'Scope 2', 'Scope 3'];
}

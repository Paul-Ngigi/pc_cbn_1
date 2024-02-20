import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  date: Date = new Date();
  activatedTabIndex: any = 0;
  tabs: string[] = ['Emission Overview', 'Scope 1', 'Scope 2', 'Scope 3'];
  emissionOfsetCalculator: number = 71;
  scope1OfsetCalculator: number = 20;
  scope2OfsetCalculator: number = 40;
  scope3OfsetCalculator: number = 10;

  tabChange(tabIndex: any) {
    // This function works to enable switch contents during switching the tabs.
    this.activatedTabIndex = tabIndex;
  }
  
  ngOnInit(): void {}
}
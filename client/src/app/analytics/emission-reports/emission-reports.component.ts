import { Component } from '@angular/core';

@Component({
  selector: 'app-emission-reports',
  templateUrl: './emission-reports.component.html',
  styleUrls: ['./emission-reports.component.scss']
})
export class EmissionReportsComponent {

  activatedTabIndex: number = 0;
  tabs: string[] = ['Overview Emissions', 'Scope 1', 'Scope 2', 'Scope 3'];
  activatedTab: string = this.tabs[this.activatedTabIndex];

  tabChange(tabIndex: any) {
    // This function works to enable switch contents during switching the tabs.
    this.activatedTabIndex = tabIndex;
    this.activatedTab = this.tabs[this.activatedTabIndex];
  }

}

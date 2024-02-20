import { Component } from '@angular/core';

@Component({
  selector: 'app-organizational-unit',
  templateUrl: './organizational-unit.component.html',
  styleUrls: ['./organizational-unit.component.scss']
})
export class OrganizationalUnitComponent {
  activatedTabIndex: any = 0;
  tabs: string[] = ['Organizational Unit', 'User Manager'];  
  tabChange(tabIndex: any) {
    // This function works to enable switch contents during switching the tabs.
    this.activatedTabIndex = tabIndex;
  } 
}

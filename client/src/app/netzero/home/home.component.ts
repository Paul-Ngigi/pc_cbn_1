import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  activatedTabIndex: any = 0;
  tabs: string[] = ['Net Zero Overview', 'Tasks', 'Track'];  
  tabChange(tabIndex: any) {
    // This function works to enable switch contents during switching the tabs.
    this.activatedTabIndex = tabIndex;
  }
}

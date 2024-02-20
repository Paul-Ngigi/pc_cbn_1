import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reusable-slideable-nav',
  templateUrl: './reusable-slideable-nav.component.html',
  styleUrls: ['./reusable-slideable-nav.component.scss']
})
export class ReusableSlideableNavComponent {
  activatedTabIndex: any = 0;
  tabs: string[] = ['Overview', 'Projects', 'Checkout', 'Orders'];  
  tabChange(tabIndex: any) {
    // This function works to enable switch contents during switching the tabs.
    this.activatedTabIndex = tabIndex;
  }  

}

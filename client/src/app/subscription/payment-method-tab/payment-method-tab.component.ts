import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-method-tab',
  templateUrl: './payment-method-tab.component.html',
  styleUrls: ['./payment-method-tab.component.scss']
})
export class PaymentMethodTabComponent {
  tabs = ['Pay with card', 'Pay with M-Pesa'];
  activeTabIndex = 0;

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }
}

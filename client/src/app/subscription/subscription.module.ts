import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription.component';
import { SharedModule } from '../shared/shared.module';
import { SubscriptionTabsComponent } from './subscription-tabs/subscription-tabs.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { HeadlineComponent } from './headline/headline.component';
import { ButtonButtonComponent } from './button-button/button-button.component';
import { PaymentMethodTabComponent } from './payment-method-tab/payment-method-tab.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { BillingFormComponent } from './billing-form/billing-form.component';
import { DetailsPageComponent } from './details-page/details-page.component';


@NgModule({
  declarations: [
    SubscriptionComponent,
    HomeComponent,
    SubscriptionTabsComponent,
    HeadlineComponent,
    ButtonButtonComponent,
    BillingFormComponent,
    PaymentMethodTabComponent,
    OrderDetailsComponent,
    DetailsPageComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    SubscriptionRoutingModule,
  ]
})
export class SubscriptionModule { }

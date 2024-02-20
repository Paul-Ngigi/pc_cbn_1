import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { OffsetComponent } from './offset.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';

import { OffsetRoutingModule } from './offset-routing.module';
import { ReusableSlideableNavComponent } from './reusable-slideable-nav/reusable-slideable-nav.component';
import { OffsetScopeFocusComponent } from './offset-scope-focus/offset-scope-focus.component';
import { ImpactCardsComponent } from './impact-cards/impact-cards.component';
import { SinglePortfolioComponent } from './single-portfolio/single-portfolio.component';
import { OffsetRatioComponent } from './offset-ratio/offset-ratio.component';
import { GuidelinesPopupComponent } from './guidelines-popup/guidelines-popup.component';
import { ReusableProjectCardComponent } from './reusable-project-card/reusable-project-card.component';
import { ReusableEmptyCheckoutComponent } from './reusable-empty-checkout/reusable-empty-checkout.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { FullCheckoutComponent } from './full-checkout/full-checkout.component';
import { RateBreakDownComponent } from './rate-break-down/rate-break-down.component';
import { ProjectPortfolioMixComponent } from './project-portfolio-mix/project-portfolio-mix.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { TopImageComponent } from './top-image/top-image.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { LocationPinComponent } from './location-pin/location-pin.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    OffsetComponent,
    HomeComponent,
    ReusableSlideableNavComponent,
    OffsetScopeFocusComponent,
    ImpactCardsComponent,
    SinglePortfolioComponent,
    OffsetRatioComponent,
    GuidelinesPopupComponent,
    ReusableProjectCardComponent,
    ReusableEmptyCheckoutComponent,
    TopSectionComponent,
    ProjectDetailsComponent,
    FullCheckoutComponent,
    RateBreakDownComponent,
    ProjectPortfolioMixComponent,
    FullCheckoutComponent,
    OrderHistoryComponent,
    TopImageComponent,
    ProjectDetailsComponent,
    FullCheckoutComponent,
    OrderHistoryComponent,
    TopImageComponent,
    ProjectDetailsComponent,
    TopSectionComponent,    
    LocationCardComponent, LocationPinComponent, AccordionComponent,    
  ],
  imports: [
    CommonModule,
    SharedModule,
    OffsetRoutingModule,
    MatTabsModule,
    MatProgressBarModule,
  ]
})
export class OffsetModule { }

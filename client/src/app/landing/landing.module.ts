import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReusableIntegrationCardComponent } from '../shared/reusable-integration-card/reusable-integration-card.component';
import { InitiativeDropdownComponent } from '../shared/initiative-dropdown/initiative-dropdown.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { BrandingSectionComponent } from './branding-section/branding-section.component';
import { AccordionComponent } from './accordion/accordion.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    HeaderSectionComponent,
    FeaturesSectionComponent,
    BrandingSectionComponent,
    AccordionComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
    CdkAccordionModule
  ]
})
export class LandingModule { }

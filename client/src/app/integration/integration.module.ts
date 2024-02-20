import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IntegrationComponent } from './integration.component';
import { SharedModule } from '../shared/shared.module';
import { IntegrationRoutingModule } from './integration-routing.module';
import { FuelcardApiComponent } from './fuelcard-api/fuelcard-api.component';
import { IntergrationCardsComponent } from './intergration-cards/intergration-cards.component';
import { TelematicsPageComponent } from './telematics-page/telematics-page.component';
import { ManualDataComponent } from './manual-data/manual-data.component';



@NgModule({
  declarations: [
    IntegrationComponent,
    HomeComponent,
    FuelcardApiComponent,
    IntergrationCardsComponent,
    TelematicsPageComponent,
    ManualDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IntegrationRoutingModule
  ]
})
export class IntegrationModule { }

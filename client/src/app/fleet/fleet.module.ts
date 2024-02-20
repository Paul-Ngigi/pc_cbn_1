import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FleetComponent } from './fleet.component';
import { SharedModule } from '../shared/shared.module';
import { FleetRoutingModule } from './fleet-routing.module';
import { ReportTableComponent } from './report-table/report-table.component';
import { ReusableEmissionAnalysisCardComponent } from './reusable-emission-analysis-card/reusable-emission-analysis-card.component';
import { FullEmissionCardsComponent } from './full-emission-cards/full-emission-cards.component';
import { UploadCreateComponent } from './upload-create/upload-create.component';
import { UploadVehicleComponent } from './upload-vehicle/upload-vehicle.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';



@NgModule({
  declarations: [
    FleetComponent,
    VehiclesComponent,
    ReportTableComponent,
    ReusableEmissionAnalysisCardComponent,
    FullEmissionCardsComponent,
    UploadCreateComponent,
    ReusableEmissionAnalysisCardComponent,
    UploadVehicleComponent,
    ReportsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FleetRoutingModule
  ],
  exports: [
    ReusableEmissionAnalysisCardComponent,
    FullEmissionCardsComponent
  ]

})
export class FleetModule { }

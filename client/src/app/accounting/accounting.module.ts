import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllScopesComponent } from './all-scopes/all-scopes.component';
import { AccountingComponent } from './accounting.component';
import { SharedModule } from '../shared/shared.module';
import { AccountingRoutingModule } from './accounting-routing.module';
import { AddDataComponent } from './add-data/add-data.component';
import { ScopeFormComponent } from './scope-form/scope-form.component';
import { StationeryFormComponent } from './stationery-form/stationery-form.component';
import { FleetFormComponent } from './fleet-form/fleet-form.component';
import { ProcessingEmissionFormComponent } from './processing-emission-form/processing-emission-form.component';
import { FugitiveEmissionFormComponent } from './fugitive-emission-form/fugitive-emission-form.component';
import { ElectricityConsumptionFormComponent } from './electricity-consumption-form/electricity-consumption-form.component';
import { SearchLoaderComponent } from './search-loader/search-loader.component';
import { DatalistComponent } from './datalist/datalist.component';

@NgModule({
  declarations: [
    AccountingComponent,
    AllScopesComponent,
    AddDataComponent,
    ScopeFormComponent,
    StationeryFormComponent,
    FleetFormComponent,
    ProcessingEmissionFormComponent,
    FugitiveEmissionFormComponent,
    ElectricityConsumptionFormComponent,
    SearchLoaderComponent,
    DatalistComponent,
  ],
  imports: [CommonModule, SharedModule, AccountingRoutingModule],
})
export class AccountingModule {}

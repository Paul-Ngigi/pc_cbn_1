import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingComponent } from './accounting.component';
import { AllScopesComponent } from './all-scopes/all-scopes.component';
import { ScopeFormComponent } from './scope-form/scope-form.component';
import { StationeryFormComponent } from './stationery-form/stationery-form.component';
import { FleetFormComponent } from './fleet-form/fleet-form.component';
import { ProcessingEmissionFormComponent } from './processing-emission-form/processing-emission-form.component';
import { FugitiveEmissionFormComponent } from './fugitive-emission-form/fugitive-emission-form.component';
import { ElectricityConsumptionFormComponent } from './electricity-consumption-form/electricity-consumption-form.component';
import { DatalistComponent } from './datalist/datalist.component';

const routes: Routes = [
  {
    path: '',
    component: AccountingComponent,
    children: [
      { path: '', component: AllScopesComponent },
      { path: 'stationary-combustion', component: StationeryFormComponent },
      { path: 'fleet-emission', component: FleetFormComponent },
      {
        path: 'processing-emission',
        component: ProcessingEmissionFormComponent,
      },
      {
        path: 'fugitive-emission',
        component: FugitiveEmissionFormComponent,
      },
      {
        path: 'fugitive-emission',
        component: FugitiveEmissionFormComponent,
      },
      {
        path: 'electricity-consumption',
        component: ElectricityConsumptionFormComponent,
      },
      {
        path: 'data-list',
        component: DatalistComponent,
      },
      { path: '**', component: AllScopesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountingRoutingModule {}

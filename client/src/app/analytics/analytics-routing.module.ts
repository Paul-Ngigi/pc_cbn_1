import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';
import { EmissionReportsComponent } from './emission-reports/emission-reports.component';
import { EsgReportsComponent } from './esg-reports/esg-reports.component';


const routes: Routes = [
  {
    path: '',
    component: AnalyticsComponent,
    children: [
      { path: "", component: EmissionReportsComponent  },
      { path: "esg", component: EsgReportsComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsRoutingModule {}

import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardTopSectionComponent } from './dashboard-top-section/dashboard-top-section.component';
import { CarbonImpactComponentComponent } from './carbon-impact-overview/carbon-impact-component.component';
import { CarbonFootprintChartComponent } from './carbon-footprint-chart/carbon-footprint-chart.component';
import { EmissionSourcesChartOneComponent } from './emission-sources-chart-one/emission-sources-chart-one.component';
import { ReusableComparisonChartComponent } from './reusable-comparison-chart/reusable-comparison-chart.component';
import { OffsetCalculatorComponent } from './offset-calculator-overview/offset-calculator.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPageComponent,
    DashboardTopSectionComponent,
    CarbonImpactComponentComponent,
    CarbonFootprintChartComponent,
    EmissionSourcesChartOneComponent,
    ReusableComparisonChartComponent,
    OffsetCalculatorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],

})
export class DashboardModule { }

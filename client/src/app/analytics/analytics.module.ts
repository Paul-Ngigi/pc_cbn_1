import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { EmissionsOverviewComponent } from './emissions-overview/emissions-overview';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OffsetcalculatorComponent } from './offsetcalculator/offsetcalculator.component';
import { FootprintPerScopeChartComponent } from './footprint-per-scope-chart/footprint-per-scope-chart.component';
import { EmissionCategoryComponent } from './emission-category/emission-category.component';
import { ScopeOneComponent } from './scope-one/scope-one.component';
import { ScopeOneBreakdownComponent } from './scope-one-breakdown/scope-one-breakdown.component';
import { ProgressTrackingGraphComponent } from './progress-tracking-graph/progress-tracking-graph.component';
import { ScopeTwoComponent } from './scope-two/scope-two.component';
import { ScopeThreeComponent } from './scope-three/scope-three.component';
import { EmissionReportsComponent } from './emission-reports/emission-reports.component';
import { EsgReportsComponent } from './esg-reports/esg-reports.component';

@NgModule({
  declarations: [
    AnalyticsComponent,
    EmissionsOverviewComponent,
    OffsetcalculatorComponent,
    FootprintPerScopeChartComponent,
    EmissionCategoryComponent,
    ScopeOneComponent,
    ScopeOneBreakdownComponent,
    ProgressTrackingGraphComponent,
    ScopeTwoComponent,
    ScopeThreeComponent,
    EmissionReportsComponent,
    EsgReportsComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    SharedModule,
  ],
})
export class AnalyticsModule { }

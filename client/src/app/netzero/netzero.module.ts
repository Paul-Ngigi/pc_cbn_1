import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HomeComponent } from './home/home.component';
import { NetzeroComponent } from './netzero.component';
import { SharedModule } from '../shared/shared.module';
import { NetzeroRoutingModule } from './netzero-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NetZeroAllGoalsComponent } from './net-zero-all-goals/net-zero-all-goals.component';
import { EmissionAndReductionCardsComponent } from './emission-and-reduction-cards/emission-and-reduction-cards.component';
import { GoalsTableComponent } from './goals-table/goals-table.component';
import { BoardService } from '../services/board.service';
import { OverviewComponent } from './overview/overview.component';
import { ForecastChartComponent } from './forecast-chart/forecast-chart.component';
import { TrackComponent } from './track/track.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { CardModalComponent } from './card-modal/card-modal.component';

@NgModule({
  declarations: [
    NetzeroComponent,
    HomeComponent,
    NetZeroAllGoalsComponent,
    EmissionAndReductionCardsComponent,
    GoalsTableComponent,
    FollowUpComponent,
    CardModalComponent,
    OverviewComponent,
    ForecastChartComponent,
    TrackComponent
  ],
  
  imports: [
    CommonModule,
    DragDropModule,
    NetzeroRoutingModule,
    SharedModule,
    NgApexchartsModule,
  ],
  providers: [BoardService]
})
export class NetzeroModule { }
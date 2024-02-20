import { Component, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  colors: string[];
  labels: string[];
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-scope-one-breakdown',
  templateUrl: './scope-one-breakdown.component.html',
  styleUrls: ['./scope-one-breakdown.component.scss']
})
export class ScopeOneBreakdownComponent {

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [50, 25, 15, 10],
      labels: ['Fleet', 'Mobile', 'Process', 'Stationary'],
      colors: [ '#5E896E', '#CFA16C','#1C64F2', '#C81E1E'],
      chart: {
        type: 'donut',
        height: 350,
        width: '100%',
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '55%',
            labels: {
              show: true,
              name: {
                fontSize: '14px',
              },
              value: {
                fontSize: '14',
                show: false,
              },
              total: {
                fontSize: '14',
                show: false,
              },
            },
          },
        },
      },
    };
  }
}

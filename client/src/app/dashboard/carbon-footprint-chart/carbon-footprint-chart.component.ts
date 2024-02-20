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
  selector: 'app-carbon-footprint-chart',
  templateUrl: './carbon-footprint-chart.component.html',
  styleUrls: ['./carbon-footprint-chart.component.scss']
})
export class CarbonFootprintChartComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [20, 50, 30],
      labels: ['Scope 1', 'Scope 2', 'Scope 3'],
      colors: [ '#CFA16C', '#014737','#5E896E'],
      chart: {
        type: 'donut',
        height: 250,
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

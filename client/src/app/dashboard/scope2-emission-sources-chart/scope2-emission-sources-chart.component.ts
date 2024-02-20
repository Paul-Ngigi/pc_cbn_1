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
  selector: 'app-scope2-emission-sources-chart',
  templateUrl: './scope2-emission-sources-chart.component.html',
  styleUrls: ['./scope2-emission-sources-chart.component.scss'],
})
export class Scope2EmissionSourcesChartComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [40, 15, 45],
      labels: ['Electricity Consumed', 'Electiricty Generated', 'Purchased heat/steam'],
      colors: ['#ff804d', '#e3b304', '#803ede'],
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
              show: false,
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

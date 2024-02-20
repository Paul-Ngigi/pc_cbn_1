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
  selector: 'app-emission-sources-chart-one',
  templateUrl: './emission-sources-chart-one.component.html',
  styleUrls: ['./emission-sources-chart-one.component.scss'],
})
export class EmissionSourcesChartOneComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  isLoading: boolean = true;

  constructor() {
    this.chartOptions = {
      series: [40, 13, 15, 5, 7, 20],
      labels: ['Vehicles', 'Fugitive', 'Boilers', 'Furnaces','Generators','Industrial'],
      colors: ['#ff66b1', '#00ac63', '#ff804d', '#e3b304', '#803ede', '#248404'],
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

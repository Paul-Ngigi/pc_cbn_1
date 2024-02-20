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
  selector: 'app-scope3-emission-sources-chart',
  templateUrl: './scope3-emission-sources-chart.component.html',
  styleUrls: ['./scope3-emission-sources-chart.component.scss']
})
export class Scope3EmissionSourcesChartComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [30, 60, 10],
      labels: ['Resources Emissions', 'Upstream Emissions', 'Downstream Emissions'],
      colors: ['#ff66b1', '#ff804d', '#e3b304'],
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
import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ChartComponent,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  colors: string[];
  labels: string[];
  chart: ApexChart;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels
};

@Component({
  selector: 'app-offset-ratio',
  templateUrl: './offset-ratio.component.html',
  styleUrls: ['./offset-ratio.component.scss'],
})
export class OffsetRatioComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [30, 70],
      labels: ['Removable', 'Avoidance'],
      colors: ['#5E896E', '#CFA16C'],
      title: {
        text: 'Offset Ratio',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 600
        },
      },
      chart: {
        type: 'donut',
        height: 350,
        width: '100%',
      },  
      dataLabels: {
        enabled: false
      },  
    };
  }
}

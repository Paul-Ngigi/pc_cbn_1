import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexFill,
  ApexYAxis,
  ApexLegend,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  yaxis: ApexYAxis | ApexYAxis[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-reusable-comparison-chart',
  templateUrl: './reusable-comparison-chart.component.html',
  styleUrls: ['./reusable-comparison-chart.component.scss'],
})
export class ReusableComparisonChartComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Emissions',
          data: [28, 51, 42, 109, 100, 31, 40, 28, 51, 42, 109, 100],
          color: '#62B846',
        },
        {
          name: 'Baseline',
          data: [11, 52, 41, 11, 32, 45, 32, 34, 52, 41, 99, 88],
          color: '#62B100',
        },
      ],
      chart: {
        width: 700,
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
        curve: 'straight',
      },
      xaxis: {
        type: 'category',
        categories: [
          'Jan',
          'Feb',
          'March',
          'April',
          'June',
          'July',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        axisBorder: {
          show: true,
          color: '#CCCCCC',
        },
        axisTicks: {
          show: true,
          color: '#CCCCCC',
        },
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
            color: '#CCCCCC',
          },
          axisBorder: {
            show: true,
            color: '#CCCCCC',
          },
          title: {
            text: 'Total CO2e (Kg)',
            style: {
              color: '#000000',
            },
          },
          tooltip: {
            enabled: true,
          },
        },
      ],
      legend: {
        position: 'top',
        labels: {
          colors: '#000000',
          useSeriesColors: false,
        },
        markers: {
          fillColors: ['#62B846', '#62B100'],
          width: 40,
          height: 20,
          radius: 0,
        },
      },
      title: {
        text: 'Total CO2e',
        align: 'left',
        style: {
          fontSize: '16',
          fontWeight: '800',
        },
      },
    };
  }
}

import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexNonAxisChartSeries,
  ApexAnnotations,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexStroke,
  ApexTheme,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  chart: ApexChart;
  annotations: ApexAnnotations;
  colors: string[];
  dataLabels: ApexDataLabels;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  stroke: ApexStroke;
  labels: string[];
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  grid: ApexGrid;
  states: ApexStates;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  theme: ApexTheme;
};
@Component({
  selector: 'app-offset-scope-focus',
  templateUrl: './offset-scope-focus.component.html',
  styleUrls: ['./offset-scope-focus.component.scss'],
})

export class OffsetScopeFocusComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [70, 70, 70 ],
      labels: ['Scope 1', 'Scope 2', 'Scope 3'],
      colors: ['#E4FCE6', '#CFA16C', '#E4FCE6'],
      title: {
        text: 'Offset scope focus',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 600,
        },
      },
      chart: {
        type: 'radialBar',        
      },
      plotOptions: {
        radialBar: {      
          track: {
            background: '#F0F0F0',
            startAngle: -300,
            endAngle: 300,
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              fontSize: "30px",
              show: true
            }
          }
        }
      },
    };
  }
}

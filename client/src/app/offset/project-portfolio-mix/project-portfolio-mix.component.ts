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
  selector: 'app-project-portfolio-mix',
  templateUrl: './project-portfolio-mix.component.html',
  styleUrls: ['./project-portfolio-mix.component.scss'],
})
export class ProjectPortfolioMixComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [17, 20, 40, 11],
      labels: ['BlueCarbon', 'Biochar', 'Clean Cooking', 'Forestry'],
      colors: ['#5E896E', '#CFA16C', '#E4FCE6', '#EED2AD'],
      title: {
        text: 'Project Portfolio Mix',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 600,
        },
      },
      chart: {
        type: 'donut',                
      },
      dataLabels: {
        enabled: false
      },   
    };
  }
}

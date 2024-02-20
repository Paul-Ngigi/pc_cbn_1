import { Component, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-emission-category',
  templateUrl: './emission-category.component.html',
  styleUrls: ['./emission-category.component.scss']
})
export class EmissionCategoryComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [50, 80, 45, 60, 70, 15, 35],
      colors: ["#F05252","#3F83F8","#FF9800","#03543F","#1C64F2","#1C64F2","#40D4D4"],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "16px"
            }
          }
        }
      },
      labels: ["Stationary", "Electricity", "Process", "Fugitive", "Fleet", "Employee", "Goods & Services"]
    };
  }

}

import { Component, ViewChild} from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({

  selector: 'app-footprint-per-scope-chart',
  templateUrl: './footprint-per-scope-chart.component.html',
  styleUrls: ['./footprint-per-scope-chart.component.scss']
})
export class FootprintPerScopeChartComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Scope 1",
          color: "#CFA16C",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Scope 2",
          color: "#5E896E",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Scope 3",
          color: "#E4FCE6",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          // endingShape: "rounded"
        }
      },
      legend: {
        
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: ""
        }
      },
      fill: {
        opacity: 1,
        colors: ["#CFA16C", "#5E896E", "#E4FCE6"],
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " C02e";
          }
        }
      }
    };
  }
}




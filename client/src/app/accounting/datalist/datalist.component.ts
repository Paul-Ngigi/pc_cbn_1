import { Component } from '@angular/core';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent {
  tabledata:{
    subcat:string,
    amount: any,
    percentage: any,
    action: string
  }[]=[
    {
      subcat: "Stationary Combustion",
      amount: 40000,
      percentage: 10,
      action: "Edit",
    },
    {
      subcat: "Mobile Combustion",
      amount: 35000,
      percentage: 8,
      action: "Edit",
    },
    {
      subcat: "Process Sources",
      amount: 18000,
      percentage: 5,
      action: "Edit",
    },
    {
      subcat: "Fugitive Sources",
      amount: 48990,
      percentage: 25,
      action: "Edit",
    },
    {
      subcat: "Electricity Combustion",
      amount: 72000,
      percentage: 40,
      action: "Edit",
    },
    {
      subcat: "Heat Consumption",
      amount: 4000,
      percentage: 1,
      action: "Edit",
    },
    {
      subcat: "Purchased Good & Services",
      amount: 400,
      percentage: 0.1,
      action: "Edit",
    },
    {
      subcat: "Business Travel",
      amount: 86000,
      percentage: 62,
      action: "Edit",
    },
    {
      subcat: "Employee Commuting",
      amount: 6000,
      percentage: 14,
      action: "Edit",
    },
  ]
}

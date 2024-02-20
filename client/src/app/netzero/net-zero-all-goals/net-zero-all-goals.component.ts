import { Component } from '@angular/core';
import { INetzero } from 'src/app/interfaces/netzero.interface';

@Component({
  selector: 'app-net-zero-all-goals',
  templateUrl: './net-zero-all-goals.component.html',
  styleUrls: ['./net-zero-all-goals.component.scss']
})
export class NetZeroAllGoalsComponent {

  container: INetzero [] = [
    {
      todo: 'To do 6',
      label: 'Electricity',
      header: 'Night Power Switch',
      text: 'Switch off power in offices during the night and off-peak. Save 15%.'
    },

    {
      todo: 'In Progress 2',
      label: 'Transport',
      header: 'Electric Vehicles',
      text: 'Get a lease service for company passenger vehicles. One EV switch per year.'
    },

    {
      todo: 'Completed 3',
      label: 'Travel & Commute',
      header: 'Less Flights',
      text: 'Reduce domestic & international flights by 20% across the company.'
    }

  ]



}

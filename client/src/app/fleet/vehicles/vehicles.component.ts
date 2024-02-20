import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  vehicles: any[] = [
    { make: 'Nissan', model: 'altima', country: 'Kenya', regNO: 'KCB 659B',  capacity: '2.5L',  fuel: 'Regular', date: 'Oct 64'},
    { make: 'Nissan', model: 'altima', country: 'Kenya', regNO: 'KCB 659B',  capacity: '2.5L',  fuel: 'Regular', date: 'Oct 64'},
    { make: 'Nissan', model: 'altima', country: 'Kenya', regNO: 'KCB 659B',  capacity: '2.5L',  fuel: 'Regular', date: 'Oct 64'},
    { make: 'Nissan', model: 'altima', country: 'Kenya', regNO: 'KCB 659B',  capacity: '2.5L',  fuel: 'Regular', date: 'Oct 64'},
    { make: 'Nissan', model: 'altima', country: 'Kenya', regNO: 'KCB 659B',  capacity: '2.5L',  fuel: 'Regular', date: 'Oct 64'},
    { make: 'Nissan', model: 'altima', country: 'Kenya', regNO: 'KCB 659B',  capacity: '2.5L',  fuel: 'Regular', date: 'Oct 64'},
    { make: 'Nissan', model: 'altima', country: 'Kenya', regNO: 'KCB 659B',  capacity: '2.5L',  fuel: 'Regular', date: 'Oct 64'},
    { make: 'Nissan', model: 'altima', country: 'Kenya', regNO: 'KCB 659B',  capacity: '2.5L',  fuel: 'Regular', date: 'Oct 64'},
    { make: 'Nissan', model: 'altima', country: 'Kenya', regNO: 'KCB 659B',  capacity: '2.5L',  fuel: 'Regular', date: 'Oct 64'},
    { make: 'Nissan', model: 'altima', country: 'Kenya', regNO: 'KCB 659B',  capacity: '2.5L',  fuel: 'Regular', date: 'Oct 64'},
    { make: 'Nissan', model: 'altima', country: 'Kenya', regNO: 'KCB 659B',  capacity: '2.5L',  fuel: 'Regular', date: 'Oct 64'},
    { make: 'Nissan', model: 'altima', country: 'Kenya', regNO: 'KCB 659B',  capacity: '2.5L',  fuel: 'Regular', date: 'Oct 64'},
  ];
  constructor(private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit() {    
  }
  
}

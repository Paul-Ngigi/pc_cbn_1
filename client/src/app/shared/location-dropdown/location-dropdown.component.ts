import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-location-dropdown',
  templateUrl: './location-dropdown.component.html',
  styleUrls: ['./location-dropdown.component.scss'],
})
export class LocationDropdownComponent {
  @Output() locationEvent = new EventEmitter<String>();

  locations: string[] = ['Nairobi', 'Uganda', 'Tanzania'];

  onLocationChange(selectedLocation: string) {    
    this.locationEvent.emit(selectedLocation);
  }
}

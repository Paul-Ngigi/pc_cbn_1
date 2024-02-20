import { Component } from '@angular/core';

@Component({
  selector: 'app-fugitive-emission-form',
  templateUrl: './fugitive-emission-form.component.html',
  styleUrls: ['./fugitive-emission-form.component.scss']
})
export class FugitiveEmissionFormComponent {
  emissionSources: string[] = [
    'Generators',
    'Heaters',
    'Boilers',
    'Generators',
    'Heaters',
    'Boilers',
    'Generators',
    'Heaters',
    'Boilers',
  ];
  equipmentNames: [] = [];
  fuelTypes: [] = [];
  fuelUnits: [] = [];
  selectedEmission = this.emissionSources[0];

  emissionSourceActive: boolean = false;
  equipmentNameActive: boolean = false;
  fuelTypeActive: boolean = false;
  fuelUnitActive: boolean = false;

  toggleEmissionSource() {
    this.emissionSourceActive = !this.emissionSourceActive;
  }

  toggleEquimentName() {
    this.equipmentNameActive = !this.equipmentNameActive;
  }

  toggleFuelType() {
    this.fuelTypeActive = !this.fuelTypeActive;
  }

  toggleFuelUnit() {
    this.fuelUnitActive = !this.fuelUnitActive;
  }
}

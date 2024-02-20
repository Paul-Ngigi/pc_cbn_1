import { Component } from '@angular/core';

@Component({
  selector: 'app-electricity-consumption-form',
  templateUrl: './electricity-consumption-form.component.html',
  styleUrls: ['./electricity-consumption-form.component.scss']
})
export class ElectricityConsumptionFormComponent {
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

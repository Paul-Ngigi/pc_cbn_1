import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-vehicle',
  templateUrl: './upload-vehicle.component.html',
  styleUrls: ['./upload-vehicle.component.scss'],
})
export class UploadVehicleComponent {
  vehicleFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.vehicleFormGroup = _formBuilder.group({
      vehicleMake: ['', Validators.required],
      country: ['', Validators.required],
      engineCapacity: ['', Validators.required],
      date: ['', Validators.required],
      vehicleModel: ['', Validators.required],
      registrationNo: ['', Validators.required],
      fuelType: ['', Validators.required],
    });
  }
  submitVehicleData() {}
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetComponent } from './fleet.component';
import { UploadCreateComponent } from './upload-create/upload-create.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';


const routes: Routes = [
  {
    path: '',
    component: FleetComponent,
    children: [
      {path:"",component:UploadCreateComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FleetRoutingModule {}
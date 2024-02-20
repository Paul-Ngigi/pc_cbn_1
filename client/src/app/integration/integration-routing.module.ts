import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntegrationComponent } from './integration.component';
import { FuelcardApiComponent } from './fuelcard-api/fuelcard-api.component';
import { TelematicsPageComponent } from './telematics-page/telematics-page.component';
import { ManualDataComponent } from './manual-data/manual-data.component';

const routes: Routes = [
  {
    path: '',
    component: IntegrationComponent,
    children: [
        {path:"",component:HomeComponent},
        {path:"fuel-cards",component:FuelcardApiComponent},
        {path:"telematics",component:TelematicsPageComponent},
        {path:"manual-data",component:ManualDataComponent }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegrationRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OffsetComponent } from './offset.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { LocationPinComponent } from './location-pin/location-pin.component';

const routes: Routes = [
  {
    path: '',
    component: OffsetComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'project-details/:id', component: ProjectDetailsComponent },
      { path: 'project-location', component: LocationPinComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffsetRoutingModule {}

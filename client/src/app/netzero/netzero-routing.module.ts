import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NetzeroComponent } from './netzero.component';

const routes: Routes = [
  {
    path: '',
    component: NetzeroComponent,
    children: [
        {path:"",component:HomeComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetzeroRoutingModule {}
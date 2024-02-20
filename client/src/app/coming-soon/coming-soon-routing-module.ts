import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './coming-soon.component';
import { Not404foundComponent } from './not404found/not404found.component';

const routes: Routes = [
  {
    path: '',
    component: ComingSoonComponent,
    children: [
      { path: '', component: Not404foundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComingSoonRoutingModule {}

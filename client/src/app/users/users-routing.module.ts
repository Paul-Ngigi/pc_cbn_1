import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { OrganizationalUnitComponent } from './organizational-unit/organizational-unit.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
        {path:"",component:OrganizationalUnitComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
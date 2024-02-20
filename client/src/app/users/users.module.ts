import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users.component';
import { OrganizationalUnitComponent } from './organizational-unit/organizational-unit.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { OneBranchComponent } from './one-branch/one-branch.component';
import { AllBranchesComponent } from './all-branches/all-branches.component';
import { ManagerFormComponent } from './manager-form/manager-form.component';
import { UserDetailsPopupComponent } from './user-details-popup/user-details-popup.component';
import { UsersTopSectionComponent } from './users-top-section/users-top-section.component';
import { CompanyDropdownComponent } from './company-dropdown/company-dropdown.component';


@NgModule({
  declarations: [
    UsersComponent,
    OrganizationalUnitComponent,
    SearchBarComponent,
    OneBranchComponent,
    AllBranchesComponent,
    ManagerFormComponent,
    UserDetailsPopupComponent,
    UsersTopSectionComponent,
    CompanyDropdownComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

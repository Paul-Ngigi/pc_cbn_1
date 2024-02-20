import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Pipes
import { TruncatePipe } from '../pipes/truncate.pipe';
// Mat Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MonthlyDropdownComponent } from './monthly-dropdown/monthly-dropdown.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatDatepickerModule} from '@angular/material/datepicker';
// Components Imports
import { BaseLayoutComponent } from '../components/base-layout/base-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavigationalIntegrationTabsComponent } from './navigational-integration-tabs/navigational-integration-tabs.component';
import { LocationDropdownComponent } from './location-dropdown/location-dropdown.component';
import { ReusableSlidableTabComponent } from './reusable-slidable-tab/reusable-slidable-tab.component';
import { YearlyDropdownComponent } from './yearly-dropdown/yearly-dropdown.component';
import { QuartelyDropdownComponent } from './quartely-dropdown/quartely-dropdown.component';
import { InitiativeDropdownComponent } from './initiative-dropdown/initiative-dropdown.component';
import { ReusableScopeDataCardComponent } from './reusable-scope-data-card/reusable-scope-data-card.component';
import { LoaderComponent } from './loader/loader.component';
import { NetzeroGoalsComponent } from './netzero-goals/netzero-goals.component';
import { AuthLayoutComponent } from '../components/auth-layout/auth-layout.component';
import { LandingLayoutComponent } from '../components/landing-layout/landing-layout.component';
import { HampsterLoaderComponent } from './hampster-loader/hampster-loader.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CreateAccountLayoutComponent } from '../components/create-account-layout/create-account-layout.component';
import { DotLoaderComponent } from './dot-loader/dot-loader.component';
import { ReusableIntegrationCardComponent } from './reusable-integration-card/reusable-integration-card.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    // Pipes
    TruncatePipe,
    // Components
    BaseLayoutComponent,
    CreateAccountLayoutComponent,
    NavbarComponent,
    FooterComponent,
    SideNavComponent,
    NavigationalIntegrationTabsComponent,
    LocationDropdownComponent,
    MonthlyDropdownComponent,
    ReusableSlidableTabComponent,
    YearlyDropdownComponent,
    QuartelyDropdownComponent,
    DashboardNavbarComponent,
    InitiativeDropdownComponent,
    NavigationalIntegrationTabsComponent,
    SideNavComponent,
    ReusableScopeDataCardComponent,
    LoaderComponent,
    NetzeroGoalsComponent,
    AuthLayoutComponent,
    LandingLayoutComponent,
    LocationDropdownComponent,
    YearlyDropdownComponent,
    MonthlyDropdownComponent,
    HampsterLoaderComponent,
    DotLoaderComponent,
    ReusableIntegrationCardComponent,
    DashboardFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,    
    // Mat Imports
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressBarModule,
    CdkAccordionModule,
    MatDatepickerModule,
    MatNativeDateModule,    
  ],
  exports: [
    // Pipes
    TruncatePipe,
    // Mat Exports
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressBarModule,
    CdkAccordionModule,
    MatDatepickerModule,
    MatNativeDateModule,    
    // Components Exports
    BaseLayoutComponent,
    CreateAccountLayoutComponent,
    NavbarComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    ReusableSlidableTabComponent,
    YearlyDropdownComponent,
    QuartelyDropdownComponent,
    InitiativeDropdownComponent,
    SideNavComponent,
    NavigationalIntegrationTabsComponent,
    NetzeroGoalsComponent,
    ReusableScopeDataCardComponent,
    LoaderComponent,
    NetzeroGoalsComponent,
    AuthLayoutComponent,
    LandingLayoutComponent,
    HampsterLoaderComponent,
    NgApexchartsModule,
    LocationDropdownComponent,
    YearlyDropdownComponent,
    MonthlyDropdownComponent,
    DotLoaderComponent,
    ReusableIntegrationCardComponent,
  ],
})
export class SharedModule {}

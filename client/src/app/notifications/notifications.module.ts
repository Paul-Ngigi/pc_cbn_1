import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NotificationsRoutingModule } from './notifications-routing.module';

@NgModule({
  declarations: [
    NotificationsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }

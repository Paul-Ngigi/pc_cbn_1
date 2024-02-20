import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon.component';
import { SharedModule } from '../shared/shared.module';
import { Not404foundComponent } from './not404found/not404found.component';
import { ComingSoonRoutingModule } from './coming-soon-routing-module';



@NgModule({
  declarations: [
    ComingSoonComponent,
    Not404foundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComingSoonRoutingModule
  ],
  exports: [
    Not404foundComponent
  ]
})
export class ComingSoonModule { }

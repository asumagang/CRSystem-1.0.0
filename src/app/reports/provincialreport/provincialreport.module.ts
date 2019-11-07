import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvincialreportRoutingModule } from './provincialreport-routing.module';
import { ProvincialreportComponent } from './provincialreport.component';


@NgModule({
  declarations: [ProvincialreportComponent],
  imports: [
    CommonModule,
    ProvincialreportRoutingModule
  ]
})
export class ProvincialreportModule { }

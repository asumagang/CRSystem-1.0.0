import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictreportRoutingModule } from './districtreport-routing.module';
import { DistrictreportComponent } from './districtreport.component';


@NgModule({
  declarations: [DistrictreportComponent],
  imports: [
    CommonModule,
    DistrictreportRoutingModule
  ]
})
export class DistrictreportModule { }

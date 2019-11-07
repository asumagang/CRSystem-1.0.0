import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { RouterModule } from '@angular/router';
import { ReportsRoutingModule } from './reports-routing.module';
import { ChartsModule } from 'ng2-charts';
import { DistrictreportComponent } from './districtreport/districtreport.component';
import { GraphicalreportComponent } from './graphicalreport/graphicalreport.component';
import { ProvincialreportComponent } from './provincialreport/provincialreport.component';



@NgModule({
  declarations: [ReportsComponent,DistrictreportComponent,GraphicalreportComponent,ProvincialreportComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReportsRoutingModule,
    ChartsModule
  ]
})
export class ReportsModule { }

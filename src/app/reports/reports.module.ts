import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { RouterModule } from '@angular/router';
import { ReportsRoutingModule } from './reports-routing.module';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReportsRoutingModule,
    ChartsModule
  ]
})
export class ReportsModule { }

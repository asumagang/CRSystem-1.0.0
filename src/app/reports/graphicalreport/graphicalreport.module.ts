import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicalreportRoutingModule } from './graphicalreport-routing.module';
import { GraphicalreportComponent } from './graphicalreport.component';


@NgModule({
  declarations: [GraphicalreportComponent],
  imports: [
    CommonModule,
    GraphicalreportRoutingModule
  ]
})
export class GraphicalreportModule { }

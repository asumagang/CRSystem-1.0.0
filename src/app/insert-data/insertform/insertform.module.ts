import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertformRoutingModule } from './insertform-routing.module';
import { InsertformComponent } from './insertform.component';


@NgModule({
  declarations: [InsertformComponent],
  imports: [
    CommonModule,
    InsertformRoutingModule
  ]
})
export class InsertformModule { }

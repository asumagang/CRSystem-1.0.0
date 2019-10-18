import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertDataRoutingModule } from './insert-data-routing.module';
import { RouterModule } from '@angular/router';
import { InsertDataComponent } from './insert-data.component';



@NgModule({
  declarations: [InsertDataComponent],
  imports: [
    CommonModule,
    InsertDataRoutingModule,
    RouterModule
    
    
  ]
})
export class InsertDataModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertDataRoutingModule } from './insert-data-routing.module';
import { RouterModule } from '@angular/router';
import { InsertDataComponent } from './insert-data.component';
import { PantawidDataComponent } from './pantawid-data/pantawid-data.component';



@NgModule({
  declarations: [InsertDataComponent, PantawidDataComponent],
  imports: [
    CommonModule,
    InsertDataRoutingModule,
    RouterModule  
  ],
  entryComponents:[
    PantawidDataComponent
  ]
})
export class InsertDataModule { }

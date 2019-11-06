import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertDataRoutingModule } from './insert-data-routing.module';
import { RouterModule } from '@angular/router';
import { InsertDataComponent } from './insert-data.component';
import { InsertformComponent } from './insertform/insertform.component';
import { ViewdataComponent } from './viewdata/viewdata.component';



@NgModule({
  declarations: [InsertDataComponent,InsertformComponent,ViewdataComponent],
  imports: [
    CommonModule,
    InsertDataRoutingModule,
    RouterModule  
  ],
  entryComponents:[
  ]
})
export class InsertDataModule { }

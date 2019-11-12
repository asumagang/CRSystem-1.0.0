import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveusersRoutingModule } from './activeusers-routing.module';
import { ActiveusersComponent } from './activeusers.component';


@NgModule({
  declarations: [ActiveusersComponent],
  imports: [
    CommonModule,
    ActiveusersRoutingModule
  ]
})
export class ActiveusersModule { }

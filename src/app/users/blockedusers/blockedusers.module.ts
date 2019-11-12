import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockedusersRoutingModule } from './blockedusers-routing.module';
import { BlockedusersComponent } from './blockedusers.component';


@NgModule({
  declarations: [BlockedusersComponent],
  imports: [
    CommonModule,
    BlockedusersRoutingModule
  ]
})
export class BlockedusersModule { }

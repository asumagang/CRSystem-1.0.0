import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveusersRoutingModule } from './activeusers-routing.module';
import { ActiveusersComponent } from './activeusers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddusersComponent } from './addusers/addusers.component';


@NgModule({
  declarations: [ActiveusersComponent, AddusersComponent],
  imports: [
    CommonModule,
    ActiveusersRoutingModule,
    NgbModule,
    FormsModule
  ],
  entryComponents:[
      AddusersComponent
  ]
})
export class ActiveusersModule { }

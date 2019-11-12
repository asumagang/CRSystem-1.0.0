import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersrequestsRoutingModule } from './usersrequests-routing.module';
import { UsersrequestsComponent } from './usersrequests.component';


@NgModule({
  declarations: [UsersrequestsComponent],
  imports: [
    CommonModule,
    UsersrequestsRoutingModule
  ]
})
export class UsersrequestsModule { }

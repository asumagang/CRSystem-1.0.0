import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';
import { ActiveusersComponent } from './activeusers/activeusers.component';
import { BlockedusersComponent } from './blockedusers/blockedusers.component';
import { UsersrequestsComponent } from './usersrequests/usersrequests.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [UsersComponent,ActiveusersComponent,BlockedusersComponent,UsersrequestsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    NgbModule
  ]
})
export class UsersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule
  ]
})
export class UsersModule { }

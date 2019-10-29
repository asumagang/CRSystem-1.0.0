import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { RouterModule } from '@angular/router';
import { NotificationsRoutingModule } from './notification-routing.module';



@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    RouterModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }

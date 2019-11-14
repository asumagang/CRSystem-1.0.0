import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { InsertDataModule } from './insert-data/insert-data.module';
import { UsersModule } from './users/users.module';
import { HeaderComponent } from './header/header.component';
import { ProgramsModule } from './programs/programs.module';
import { FooterComponent } from './footer/footer.component';
import { ChartsModule } from 'ng2-charts';
import { NotificationsModule } from './notifications/notifications.module';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    InsertDataModule,
    UsersModule,
    ProgramsModule,
    ChartsModule,
    NotificationsModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 8000,
      positionClass:'toast-top-right',
      preventDuplicates:true,
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

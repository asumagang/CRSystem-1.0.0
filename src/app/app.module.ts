import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavbarComponent } from './navbar/navbar.component';
import { InsertDataModule } from './insert-data/insert-data.module';
import { UsersModule } from './users/users.module';
import { HeaderComponent } from './header/header.component';
import { ProgramsModule } from './programs/programs.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    InsertDataModule,
    UsersModule,
    ProgramsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

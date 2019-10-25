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
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs.component';
import { RouterModule } from '@angular/router';
import { ProgramsRoutingModule } from './programs-routing.module';



@NgModule({
  declarations: [ProgramsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProgramsRoutingModule
  ]
})
export class ProgramsModule { }

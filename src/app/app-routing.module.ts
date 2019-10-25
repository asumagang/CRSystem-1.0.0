import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule"
  },
  {
    path: "insert-data",
    loadChildren: "./insert-data/insert-data.module#InsertDataModule"
  },
  {
    path: "users",
    loadChildren: "./users/users.module#UsersModule"
  },
  {
    path: "programs",
    loadChildren: "./programs/programs.module#ProgramsModule"
  },
  {
    path: "reports",
    loadChildren: "./reports/reports.module#ReportsModule"
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

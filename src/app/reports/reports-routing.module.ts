import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { DistrictreportComponent } from './districtreport/districtreport.component';
import { GraphicalreportComponent } from './graphicalreport/graphicalreport.component';
import { ProvincialreportComponent } from './provincialreport/provincialreport.component';



const routes: Routes = [
    {
        path: '',
        component: ReportsComponent,children:[
            {
                path: 'districtreport',component:DistrictreportComponent
            },
            {
                path: 'graphicalreport',component:GraphicalreportComponent
            },
            {
                path: 'provincialreport',component:ProvincialreportComponent
            },
            {
                path: '', redirectTo: 'graphicalreport', pathMatch: 'full'
              }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule{

    

}
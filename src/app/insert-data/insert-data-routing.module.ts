import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertDataComponent } from './insert-data.component';
import { InsertformComponent } from './insertform/insertform.component';
import { ViewdataComponent } from './viewdata/viewdata.component';


const routes: Routes = [
    {
        path: '',
        component: InsertDataComponent,children:[
            {
                path: 'insertform',component:InsertformComponent
            },
            {
                path:'viewdata',component:ViewdataComponent
            },
            {
                path: '', redirectTo: 'insertform', pathMatch: 'full'
              }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InsertDataRoutingModule{

    

}
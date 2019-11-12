import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ActiveusersComponent } from './activeusers/activeusers.component';
import { BlockedusersComponent } from './blockedusers/blockedusers.component';
import { UsersrequestsComponent } from './usersrequests/usersrequests.component';



const routes: Routes = [
    {
        path: '',
        component: UsersComponent,children:[
            {
                path: 'activeusers',component:ActiveusersComponent
            },
            {
                path: 'blockedusers',component:BlockedusersComponent
            },
            {
                path: 'usersrequests',component:UsersrequestsComponent
            },
            {
                path: '', redirectTo: 'activeusers', pathMatch: 'full'
              }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule{

    

}
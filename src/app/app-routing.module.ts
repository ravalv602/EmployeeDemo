import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmpComponent } from './add-emp/add-emp.component';

const routes: Routes = [{
  path:'',component:DashboardComponent
},
{
  path:'addE',component:AddEmpComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

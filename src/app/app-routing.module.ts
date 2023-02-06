import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientListComponent} from '../app/client-list/client-list.component';
import {DashboardComponent} from '../app/dashboard/dashboard.component';

const routes: Routes = [
  {path:'clientlist', component:ClientListComponent},
  {path:'', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AddClientComponent } from './component/add-client/add-client.component';
import { ClientDetailsComponent } from './component/client-details/client-details.component';


const routes: Routes =
 [
   
  {path:'', component:DashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'addclient', component:AddClientComponent},
  {path:'client/:id', component:ClientDetailsComponent},


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

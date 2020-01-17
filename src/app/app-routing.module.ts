import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AddClientComponent } from './component/add-client/add-client.component';
import { ClientDetailsComponent } from './component/client-details/client-details.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { AuthguardService } from './services/guard/authguard.service';


const routes: Routes =
 [
   
  {path:'', component:DashboardComponent , canActivate:[AuthguardService]},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'addclient', component:AddClientComponent , canActivate:[AuthguardService]},
  {path:'client/:id', component:ClientDetailsComponent , canActivate:[AuthguardService]},
  {path:"clientedit/:id",component:EditClientComponent , canActivate:[AuthguardService]}


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './component/add-client/add-client.component';
import { ClientsComponent } from './component/clients/clients.component';
import { ClientDetailsComponent } from './component/client-details/client-details.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RegisterComponent } from './component/register/register.component';
import { SettingsComponent } from './component/settings/settings.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';


import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FormsModule } from '@angular/forms'
import { environment } from 'src/environments/environment';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { from } from 'rxjs';

  
@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ClientsComponent,
    ClientDetailsComponent,
    DashboardComponent,
    EditClientComponent,
    LoginComponent,
    NavbarComponent,
    PageNotFoundComponent,
    RegisterComponent,
    SettingsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

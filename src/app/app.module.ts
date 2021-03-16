import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { authInterceptorProviders } from './auth_service/authInterceptor';
import { UserPatientComponent } from './user-patient/user-patient.component';
import { UserDoctorComponent } from './user-doctor/user-doctor.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserPatientComponent,
    UserDoctorComponent,
    UserAdminComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

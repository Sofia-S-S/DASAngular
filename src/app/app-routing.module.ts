import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserAdminComponent} from './user-admin/user-admin.component';
import {UserDoctorComponent} from './user-doctor/user-doctor.component';
import {UserPatientComponent} from './user-patient/user-patient.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'patient', component:UserPatientComponent}, 
  {path:'doctor', component:UserDoctorComponent},
  {path:'admin', component:UserAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

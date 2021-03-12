import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  //A route is an object with two properties
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },
  {
    path: "doctor",
    component: DoctorComponent,
  },
  {
    path: "patient",
    component: AdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

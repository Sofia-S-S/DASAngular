import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserAdminComponent} from './user-admin/user-admin.component';
import {UserDoctorComponent} from './user-doctor/user-doctor.component';
import {UserPatientComponent} from './user-patient/user-patient.component';
import { DoctorComponent } from './components/doctor/doctor.component';

import { DoctorsAllComponent } from './components/admin/doctors-all/doctors-all.component';
import { DoctorNewComponent } from './components/admin/doctor-new/doctor-new.component';
import { ScheduleAllComponent } from './components/admin/schedule-all/schedule-all.component';
import { ScheduleNewComponent } from './components/admin/schedule-new/schedule-new.component';
import { BillNewComponent } from './components/admin/bill-new/bill-new.component';
import { BillsComponent } from './components/admin/bills/bills.component';


import { TestComponent } from './test/test.component';

import { DoctorAppointmentComponent } from './components/doctor/doctorappointment/doctor-appointment/doctor-appointment.component';
import { PatientViewBillsComponent } from './components/patient/patientviewbills/patient-view-bills/patient-view-bills.component';
import { PatientViewAppointmentsComponent } from './components/patient/patientviewappointments/patient-view-appointments/patient-view-appointments.component';
import { PatientRegisterComponent } from './components/patient/patientregister/patient-register/patient-register.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'admin', component:UserAdminComponent},
  {path:'admin/doctors', component:DoctorsAllComponent},
  {path:'admin/doctor-new', component:DoctorNewComponent},
  {path:'admin/schedule', component:ScheduleAllComponent},
  {path:'admin/schedule-new', component:ScheduleNewComponent},
  {path:'admin/bill-new', component:BillNewComponent},
  {path:'admin/bills', component:BillsComponent},
  {path:'doctor', component:UserDoctorComponent},

  //{path:'doctorViewSelfPatients', component:DoctorComponent},

  {path:'test', component:TestComponent},
  // {path:'doctorViewBookedAppointments', component:DoctorAppointmentComponent},
  // {path:'bills', component:PatientViewBillsComponent},

  {path:'doctor/patients', component:DoctorComponent},
  {path:'doctor/appointments', component:DoctorAppointmentComponent},
  {path:'patient', component:UserPatientComponent},
  {path:'patient/bills', component:PatientViewBillsComponent},
  {path:'patient/appointments', component:PatientViewAppointmentsComponent},
  //{path:'doctorViewBookedAppointments', component:DoctorAppointmentComponent},
  //{path:'patient-bills', component:PatientViewBillsComponent},
  {path:'patient-new', component:PatientRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

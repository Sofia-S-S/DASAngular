import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserAdminComponent} from './user-admin/user-admin.component';
import {UserDoctorComponent} from './user-doctor/user-doctor.component';
import {UserPatientComponent} from './user-patient/user-patient.component';
import { DoctorComponent } from './components/doctor/doctor.component';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> 3729c49 (Added POST and GET for patient)
>>>>>>> f1440db (Added POST and GET for patient)
=======

>>>>>>> d375560 (Deleted and commented in routing and module)
=======
>>>>>>> c32b802 (Modified app-routing)
import { DoctorsAllComponent } from './components/admin/doctors-all/doctors-all.component';
import { DoctorNewComponent } from './components/admin/doctor-new/doctor-new.component';
import { ScheduleAllComponent } from './components/admin/schedule-all/schedule-all.component';
import { ScheduleNewComponent } from './components/admin/schedule-new/schedule-new.component';
import { BillNewComponent } from './components/admin/bill-new/bill-new.component';
import { BillsComponent } from './components/admin/bills/bills.component';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> f1440db (Added POST and GET for patient)
=======

>>>>>>> d375560 (Deleted and commented in routing and module)
=======
>>>>>>> c32b802 (Modified app-routing)
import { TestComponent } from './test/test.component';

<<<<<<< HEAD
<<<<<<< HEAD
import { DoctorAppointmentComponent } from './components/doctor/doctorappointment/doctor-appointment/doctor-appointment.component';
import { PatientViewBillsComponent } from './components/patient/patientviewbills/patient-view-bills/patient-view-bills.component';
import { PatientViewAppointmentsComponent } from './components/patient/patientviewappointments/patient-view-appointments/patient-view-appointments.component';
import { PatientRegisterComponent } from './components/patient/patientregister/patient-register/patient-register.component';

=======
import { DoctorAppointmentComponent } from './components/doctor/doctorAppointment/doctor-appointment/doctor-appointment.component';
import { PatientViewBillsComponent } from './components/patient/patientViewBills/patient-view-bills/patient-view-bills.component';
import { PatientViewAppointmentsComponent } from './components/patient/patientViewAppointments/patient-view-appointments/patient-view-appointments.component';
=======
=======
>>>>>>> d375560 (Deleted and commented in routing and module)
import { DoctorAppointmentComponent } from './components/doctor/doctorappointment/doctor-appointment/doctor-appointment.component';
import { PatientViewBillsComponent } from './components/patient/patientviewbills/patient-view-bills/patient-view-bills.component';
import { PatientViewAppointmentsComponent } from './components/patient/patientviewappointments/patient-view-appointments/patient-view-appointments.component';
<<<<<<< HEAD
import { PatientRegisterComponent } from './components/patient/patientregister/patient-register/patient-register.component';
<<<<<<< HEAD
>>>>>>> 3729c49 (Added POST and GET for patient)
>>>>>>> f1440db (Added POST and GET for patient)
=======

>>>>>>> d375560 (Deleted and commented in routing and module)
=======
>>>>>>> c32b802 (Modified app-routing)


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
<<<<<<< HEAD
  {path:'admin', component:UserAdminComponent},
=======

  {
    path:'admin', 
    component:UserAdminComponent,
    canActivate: [AuthGuard],
    data: {
<<<<<<< HEAD
      userRoles: [Roles.ADMIN] 
=======
      userRoles: [Roles.ADMIN]
>>>>>>> f654595 (Modified app-routing)
    }
  },

>>>>>>> c32b802 (Modified app-routing)
  {path:'admin/doctors', component:DoctorsAllComponent},
  {path:'admin/doctor-new', component:DoctorNewComponent},
  {path:'admin/schedule', component:ScheduleAllComponent},
  {path:'admin/schedule-new', component:ScheduleNewComponent},
  {path:'admin/bill-new', component:BillNewComponent},
  {path:'admin/bills', component:BillsComponent},
<<<<<<< HEAD
  {path:'doctor', component:UserDoctorComponent},
<<<<<<< HEAD

  //{path:'doctorViewSelfPatients', component:DoctorComponent},

<<<<<<< HEAD
<<<<<<< HEAD
=======
  {path:'doctorViewSelfPatients', component:DoctorComponent},
<<<<<<< HEAD
>>>>>>> f1440db (Added POST and GET for patient)
=======
  //{path:'doctorViewSelfPatients', component:DoctorComponent},

>>>>>>> d375560 (Deleted and commented in routing and module)
=======
<<<<<<< HEAD

  {
    path:'doctor', component:UserDoctorComponent,
    canActivate: [AuthGuard],
    data: {
      userRoles: [Roles.DOCTOR] 
    }
  },
=======
>>>>>>> f654595 (Modified app-routing)

  {
    path:'doctor', component:UserDoctorComponent,
    canActivate: [AuthGuard],
    data: {
      userRoles: [Roles.DOCTOR]
    }
  },

  {path:'doctorViewSelfPatients', component:DoctorComponent},
>>>>>>> c32b802 (Modified app-routing)
  {path:'test', component:TestComponent},
  // {path:'doctorViewBookedAppointments', component:DoctorAppointmentComponent},
  // {path:'bills', component:PatientViewBillsComponent},

=======
  {path:'doctorViewSelfPatients', component:DoctorComponent},
  {path:'test', component:TestComponent}
  // {path:'doctorViewBookedAppointments', component:DoctorAppointmentComponent},
  // {path:'bills', component:PatientViewBillsComponent},
>>>>>>> 3dd0cf5 (1.3)
  {path:'doctor/patients', component:DoctorComponent},
  {path:'doctor/appointments', component:DoctorAppointmentComponent},
<<<<<<< HEAD
  {path:'patient', component:UserPatientComponent},
=======

  {
    path:'patient', 
    component:UserPatientComponent,
    canActivate: [AuthGuard],
    data: {
<<<<<<< HEAD
      userRoles: [Roles.PATIENT] 
      //userRoles: [Roles.ADMIN, Roles.PATIENT, Roles.DOCTOR] // Multiple Allowed User
=======
      userRoles: [Roles.PATIENT]

>>>>>>> f654595 (Modified app-routing)
    }
  },
>>>>>>> c32b802 (Modified app-routing)
  {path:'patient/bills', component:PatientViewBillsComponent},
<<<<<<< HEAD
<<<<<<< HEAD
  {path:'patient/appointments', component:PatientViewAppointmentsComponent},
  //{path:'doctorViewBookedAppointments', component:DoctorAppointmentComponent},
  //{path:'patient-bills', component:PatientViewBillsComponent},
  {path:'patient-new', component:PatientRegisterComponent},
=======
  {path:'patient/appointments', component:PatientViewAppointmentsComponent}
>>>>>>> 3dd0cf5 (1.3)
=======
  {path:'patient/appointments', component:PatientViewAppointmentsComponent},
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  {
    path:'unauth', component:UnauthpageComponent
  }
<<<<<<< HEAD
>>>>>>> 5baa684 (1.4)
=======
=======
=======
  {path:'doctorViewBookedAppointments', component:DoctorAppointmentComponent},
  {path:'patient-bills', component:PatientViewBillsComponent},
  {path:'patient-new', component:PatientRegisterComponent},
>>>>>>> 3729c49 (Added POST and GET for patient)
>>>>>>> 7b80df5 (Added POST and GET for patient)
<<<<<<< HEAD
>>>>>>> f1440db (Added POST and GET for patient)
=======
=======
  //{path:'doctorViewBookedAppointments', component:DoctorAppointmentComponent},
  //{path:'patient-bills', component:PatientViewBillsComponent},
  {path:'patient-new', component:PatientRegisterComponent},
>>>>>>> c5e2c59 (Deleted and commented in routing and module)
<<<<<<< HEAD
>>>>>>> d375560 (Deleted and commented in routing and module)
=======
=======

  {
    path: 'unauth', component:UnauthpageComponent
  }
>>>>>>> f654595 (Modified app-routing)
>>>>>>> c32b802 (Modified app-routing)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
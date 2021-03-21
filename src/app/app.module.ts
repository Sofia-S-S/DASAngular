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
import { DoctorComponent } from './components/doctor/doctor.component';

import { DoctorNewComponent } from './components/admin/doctor-new/doctor-new.component';
import { DoctorsAllComponent } from './components/admin/doctors-all/doctors-all.component'; 
import { FooterComponent } from './components/footer/footer.component';
import { ScheduleNewComponent } from './components/admin/schedule-new/schedule-new.component';
import { ScheduleAllComponent } from './components/admin/schedule-all/schedule-all.component';
import { BillNewComponent } from './components/admin/bill-new/bill-new.component';
import { BillsComponent } from './components/admin/bills/bills.component';
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { DoctorAppointmentComponent } from './components/doctor/doctorAppointment/doctor-appointment/doctor-appointment.component';
import { PatientViewBillsComponent } from './components/patient/patientViewBills/patient-view-bills/patient-view-bills.component';
import { PatientViewAppointmentsComponent } from './components/patient/patientViewAppointments/patient-view-appointments/patient-view-appointments.component';
>>>>>>> f1440db (Added POST and GET for patient)
import { TestComponent } from './test/test.component';

import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { DoctorNavbarComponent } from './components/doctor/doctor-navbar/doctor-navbar.component';
import { DoctorHeaderComponent } from './components/doctor/doctor-header/doctor-header.component';
import { PatientNavbarComponent } from './components/patient/patient-navbar/patient-navbar.component';
import { PatientHeaderComponent } from './components/patient/patient-header/patient-header.component';

import { PatientDoctorsAllComponent } from './components/patient/patient-doctors-all/patient-doctors-all.component';


=======

import { DoctorAppointmentComponent } from './components/doctor/doctorappointment/doctor-appointment/doctor-appointment.component';
import { PatientViewBillsComponent } from './components/patient/patientviewbills/patient-view-bills/patient-view-bills.component';
import { PatientViewAppointmentsComponent } from './components/patient/patientviewappointments/patient-view-appointments/patient-view-appointments.component';
import { PatientRegisterComponent } from './components/patient/patientregister/patient-register/patient-register.component'; 
>>>>>>> 3729c49 (Added POST and GET for patient)


import { DoctorAppointmentComponent } from './components/doctor/doctorappointment/doctor-appointment/doctor-appointment.component';
import { PatientViewBillsComponent } from './components/patient/patientviewbills/patient-view-bills/patient-view-bills.component';
import { PatientViewAppointmentsComponent } from './components/patient/patientviewappointments/patient-view-appointments/patient-view-appointments.component';
import { PatientRegisterComponent } from './components/patient/patientregister/patient-register/patient-register.component'; 
=======
import { DoctorAppointmentComponent } from './components/doctor/doctorAppointment/doctor-appointment/doctor-appointment.component';
import { PatientViewBillsComponent } from './components/patient/patientViewBills/patient-view-bills/patient-view-bills.component';
import { PatientViewAppointmentsComponent } from './components/patient/patientViewAppointments/patient-view-appointments/patient-view-appointments.component';
import { TestComponent } from './test/test.component';
>>>>>>> 3dd0cf5 (1.3)


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    UserPatientComponent,
    UserDoctorComponent,
    UserAdminComponent,
    RegisterComponent,
    DoctorComponent,
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======

>>>>>>> 3729c49 (Added POST and GET for patient)
>>>>>>> f1440db (Added POST and GET for patient)
    DoctorNewComponent,
    DoctorsAllComponent,
    ScheduleNewComponent,
    ScheduleAllComponent,
    BillNewComponent,
    BillsComponent,
<<<<<<< HEAD

=======
<<<<<<< HEAD
    DoctorAppointmentComponent,
>>>>>>> f1440db (Added POST and GET for patient)
    PatientViewBillsComponent,
    PatientViewAppointmentsComponent,
<<<<<<< HEAD

    TestComponent,

    AdminNavbarComponent,
    AdminHeaderComponent,
    DoctorNavbarComponent,
    DoctorHeaderComponent,
    PatientNavbarComponent,

    PatientHeaderComponent,
<<<<<<< HEAD
    PatientDoctorsAllComponent,

    PatientHeaderComponent,

=======
<<<<<<< HEAD
    PatientDoctorsAllComponent
=======
    PatientDoctorsAllComponent,

    PatientHeaderComponent
=======
>>>>>>> f1440db (Added POST and GET for patient)

    DoctorAppointmentComponent,
    PatientViewBillsComponent,
    PatientViewAppointmentsComponent,
    PatientRegisterComponent
<<<<<<< HEAD


=======
    TestComponent
>>>>>>> 3dd0cf5 (1.3)
=======
>>>>>>> 3729c49 (Added POST and GET for patient)

>>>>>>> 7b80df5 (Added POST and GET for patient)
>>>>>>> f1440db (Added POST and GET for patient)
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

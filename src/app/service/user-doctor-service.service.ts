import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Appointment } from '../models/appointment';
import { PatientDoctor } from '../models/patientdoctor';
import { formatCurrency } from '@angular/common';
import { TokenStorageService } from '../auth_service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserDoctorServiceService {

  constructor(private HttpClient:HttpClient,
    private token:TokenStorageService) { }

  viewSelfPatients():Observable<PatientDoctor[]> {
    return this.HttpClient.get('http://localhost:8080/doctor/view-patients?username=' + this.token.getUser().username) as Observable<PatientDoctor[]>
  }

  viewBookedAppointments():Observable<Appointment[]> {
    return this.HttpClient.get('http://localhost:8080/doctor/view-booked-appointments?username=' + this.token.getUser().username) as Observable<Appointment[]>;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { User } from '../models/user';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class UserDoctorServiceService {

  constructor(private HttpClient:HttpClient) { }

  viewSelfPatients():Observable<User[]> {
    return this.HttpClient.get('http://localhost:8080/doctor/viewSelfPatients') as Observable<User[]>;

  }

  viewBookedAppointments():Observable<Appointment[]> {
    return this.HttpClient.get('http://localhost:8080/doctor/viewBookedAppointments') as Observable<Appointment[]>;

  }
}

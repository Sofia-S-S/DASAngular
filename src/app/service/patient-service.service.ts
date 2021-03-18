import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { User } from '../models/user';
import { Appointment } from '../models/appointment';
import { Patient } from '../models/patient';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  //the parameter can be set server-side or here
  registerNewPatient():Observable<User> {
    return this.HttpClient.get('http://localhost:8080/patient/new') as Observable<User>
  }

  //the parameter can be set server-side or here
  viewAvailability():Observable<Appointment> {
    return this.HttpClient.get('http://localhost:8080/patient/availability') as Observable<Appointment>
  }

  //the parameter can be set server-side or here
  bookAppointment():Observable<Appointment> {
    return this.HttpClient.get('http://localhost:8080/patient/booking') as Observable<Appointment>
  }

  //the parameter can be set server-side or here
  getMyAppointments():Observable<Appointment[]> {
    return this.HttpClient.get('http://localhost:8080/patient/appointments') as Observable<Appointment[]>
  }

  //the parameter can be set server-side or here
  cancelAppointment():Observable<Appointment> {
    return this.HttpClient.get('http://localhost:8080/patient/cancel') as Observable<Appointment>
  }

  constructor(private HttpClient:HttpClient) { }
  //the parameter can be set server-side or here
  viewMyBills():Observable<Bill[]> {
    return this.HttpClient.get('http://localhost:8080/patient/bills') as Observable<Bill[]>

  }

  //the parameter can be set server-side or here
  payBill():Observable<Bill> {
    return this.HttpClient.get('http://localhost:8080/patient/pay') as Observable<Bill>
  }
}

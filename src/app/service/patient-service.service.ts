import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { User } from '../models/user';
import { Appointment } from '../models/appointment';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  //endpoint still not setup
  registerNewPatient(formData:any):Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type':'multipart/form-data'
    });
    let options = {headers: headers};
    return this.HttpClient.post('http://localhost:8080/patient/new', formData) 
  }

  //endpoint is setup in appointment controller
  viewAvailability():Observable<Appointment> {
    return this.HttpClient.get('http://localhost:8080/appointment/availability') as Observable<Appointment>
  }

  //endpoint is setup in appointment controller
  bookAppointment():Observable<Appointment> {
    return this.HttpClient.get('http://localhost:8080/appointment/booking') as Observable<Appointment>
  }

  //endpoint setup in appointment controller
  getMyAppointments():Observable<Appointment[]> {
    return this.HttpClient.get('http://localhost:8080/appointment/appointments') as Observable<Appointment[]>
  }

  //endpoint is setup in appointment controller
  cancelAppointment():Observable<Appointment> {
    return this.HttpClient.get('http://localhost:8080/appointment/cancel') as Observable<Appointment>
  }

  constructor(private HttpClient:HttpClient) { }
  //endpoint still not setup
  viewMyBills():Observable<Bill[]> {
    return this.HttpClient.get('http://localhost:8080/bill/bills') as Observable<Bill[]>

  }

  //endpint not setup in bill controller 
  payBill():Observable<Bill> {
    return this.HttpClient.get('http://localhost:8080/patient/pay') as Observable<Bill>
  }
}

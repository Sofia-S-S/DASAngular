import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { User } from '../models/user';
import { Appointment } from '../models/appointment';
import { Bill } from '../models/bill';
import { TokenStorageService } from '../auth_service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor(private HttpClient:HttpClient, private token:TokenStorageService) { }

  //endpoint still not setup
  registerNewPatient(formData:any):Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type':'multipart/form-data'
    });
    let options = {headers: headers};
    return this.HttpClient.post('http://localhost:8080/patient/new', formData) 
  }

  //endpoint is setup in appointment controller
  viewAvailability():Observable<Appointment[]> {
    return this.HttpClient.get('http://localhost:8080/appointment/availability') as Observable<Appointment[]>
  }

  //endpoint is setup in appointment controller
  bookAppointment(appointment:Appointment):Observable<Appointment> {
    return this.HttpClient.post<Appointment>('http://localhost:8080/appointment/booking', appointment)
  }

  //endpoint setup in appointment controller
  getMyAppointments():Observable<Appointment[]> {
    return this.HttpClient.get('http://localhost:8080/appointment/appointments') as Observable<Appointment[]>
  }

  //endpoint is setup in appointment controller
  cancelAppointment():Observable<Appointment> {
    return this.HttpClient.get('http://localhost:8080/appointment/cancel') as Observable<Appointment>
  }

  //endpoint still not setup
  viewMyBills():Observable<Bill[]> {
    return this.HttpClient.get('http://localhost:8080/bill/bills') as Observable<Bill[]>

  }

  //endpint not setup in bill controller 
  payBill():Observable<Bill> {
    return this.HttpClient.get('http://localhost:8080/patient/pay') as Observable<Bill>
  }

  // Endpoint for grabbing patient info
  viewInfo():Observable<User> {
    return this.HttpClient.get('http://localhost:8080/user/info?username=' + this.token.getUser().username) as Observable<User>
  }
}

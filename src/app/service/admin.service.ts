import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import { Bill } from '../models/bill';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  getAllDoctors():Observable<User[]>{
    return this.httpClient.get("http://localhost:8080/user/all") as Observable<User[]>
  }

  createDoctor(doctor:User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:8080/user/new", doctor) 
  }

  getAllBills():Observable<User[]>{
    return this.httpClient.get("http://localhost:8080/bill/all") as Observable<User[]>
  }
  createBill(bill:Bill):Observable<User>{
    return this.httpClient.post<User>("http://localhost:8080/bill/new", bill) 
  }

  getAllAppointments():Observable<User[]>{
    return this.httpClient.get("http://localhost:8080/appointment/all") as Observable<User[]>
  }
  createAppointment(appointment:Appointment):Observable<User>{
    return this.httpClient.post<User>("http://localhost:8080/appointment/new", appointment) 
  }
}

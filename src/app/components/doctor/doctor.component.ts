import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { User } from 'src/app/models/user';
import { UserDoctorServiceService } from 'src/app/service/user-doctor-service.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private userDoctorServiceService:UserDoctorServiceService,
    private router:Router) { }

  patients:User[] = [];
    appointments:Appointment[] = [];

  ngOnInit(): void {
  }

  //retrieves the doctor's own patients
  viewSelfPatients(){
    this.userDoctorServiceService.viewSelfPatients().subscribe(
      (data) => {
        this.patients = data;
      },
      () => {
        console.log("Oops, something went wrong.");
      }
    )
  }
//retrieves the doctor's appointments that are booked and active
  viewBookedAppointments(){
    this.userDoctorServiceService.viewBookedAppointments().subscribe(
      (data) => {
        this.appointments = data;
      },
      () => {
        console.log("Oops, something went wrong.");
      }
    )
  }

}

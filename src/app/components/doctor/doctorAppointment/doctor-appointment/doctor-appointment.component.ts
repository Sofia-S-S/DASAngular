import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { UserDoctorServiceService } from 'src/app/service/user-doctor-service.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {

  constructor(private userDoctorServiceService:UserDoctorServiceService,
    private router:Router) { }

    appointments:Appointment[] = [];

  ngOnInit(): void {
    this.viewBookedAppointments();
  }

  formatImage(img:any): any {
    return 'data:image/jpeg;base64,' + img;
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

import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth_service/token-storage.service';
import { Address } from 'src/app/models/address';
import { Appointment } from 'src/app/models/appointment';
import { User } from 'src/app/models/user';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patientbooking',
  templateUrl: './patientbooking.component.html',
  styleUrls: ['./patientbooking.component.css']
})
export class PatientbookingComponent implements OnInit {

  constructor(private patientService:PatientServiceService) { }

  ngOnInit(): void {
    this.availableAppointments()
  }

  appointments: Appointment[] = [];
  address:Address = new Address(1,"","","",1,"") 
  person: User = new User(1,"","","","","","","",0,this.address,new Date,"")
  patient: User = new User(1,"","","","","","","",0,this.address,new Date,"")
  appointment:Appointment = new Appointment(555555,new Date,this.patient,this.person,"")
 
  availableAppointments(){
    this.patientService.viewAvailability().subscribe(
             //we can define 2 callback f-ns (when working with Observable)
       //1.succsess
       data => {
         this.appointments = data
         console.log(data);
       },
       //2.an error
       () => {
         console.log("Oooppps!Something went wrong")
       }
     )
   }
  status:String = "availible"

  // Getting the patient id
  getPatient(){
    this.patientService.viewInfo().subscribe(
      // Success callback function
      data => {
        return this.patient = data;
      },
      // Failed callback function
      () => {
        console.log("An error has occured.");
      }
    )
  }

  bookAppointment(appointmentId:number){

    this.appointment.appointmentId = appointmentId;
    this.getPatient()
    this.appointment.patient = this.patient
    console.log(this.appointment)

    this.patientService.bookAppointment(this.appointment).subscribe(

      data => {
        this.appointment = data;
        console.log(data)
      },

      () => {
        console.log("An error has occured while booking an appointment.")
      }

    )
  }

}

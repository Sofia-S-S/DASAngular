import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { PatientServiceService } from 'src/app/service/patient-service.service';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private patientService:PatientServiceService) { }

  ngOnInit(): void {
    this.patientInfo();
  }

  address:Address = new Address(1,"","","",1,"");
  patient:User = new User(1,"","","","","","","",0,this.address,new Date,"");

  patientInfo(){
    this.patientService.viewInfo().subscribe(
      // Success callback function
      data => {
        console.log(data);
        this.patient = data;
        console.log(this.patient);
      },
      // Failed callback function
      () => {
        console.log("An error has occured.");
      }
    )
  }

}

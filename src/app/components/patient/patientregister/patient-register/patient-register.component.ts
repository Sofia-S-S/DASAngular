import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { PatientServiceService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  constructor(private patientServiceService:PatientServiceService,
    private router:Router) { }
    role:String = 'patient';
    newPatient:User = new User(99999999, "", "", "", "", "", "", "", 0, new Address(2, "", "", "", 1, ""), new Date(), this.role);
    selectedFile:any = null;
    onFileSelected(event:any) {
      console.log(event);
      this.selectedFile = event.target.files[0];
    }
    //newPatient.profilepic = "";
  ngOnInit(): void {
    this.getPatient();
  }

  formatImage(img:any): any {
    return 'data:image/jpeg;base64,' + img;
  }

  //register the patients user and address info
  registerNewPatient(){
    
    let formData = new FormData();
    formData.append("image", this.selectedFile, this.selectedFile.name);
    formData.append('user', JSON.stringify(this.newPatient));
    this.patientServiceService.registerNewPatient(formData).subscribe(
      (data) => {
        console.log(data);
      },
      () => {
        console.log(this.newPatient);
        console.log("Oops, something went wrong.");
      }
    )
  }

  updatePatient(){
    
    let formData = new FormData();
    formData.append("image", this.selectedFile, this.selectedFile.name);
    formData.append('user', JSON.stringify(this.newPatient));
    this.patientServiceService.updatePatient(formData).subscribe(
      (data) => {
        console.log(data);
      },
      () => {
        console.log(this.newPatient);
        console.log("Oops, something went wrong.");
      }
    )
  }

  getPatient() {
    this.patientServiceService.getPatient().subscribe(
      (data) => {
        this.newPatient = data;
      },
      () => {
        console.log("Oops, something went wrong.");
      }
    )
  }

}

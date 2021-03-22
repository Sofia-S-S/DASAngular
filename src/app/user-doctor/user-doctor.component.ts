import { Component, OnInit } from '@angular/core';
import {DasUserService} from '../auth_service/das-user.service';
import { Address } from '../models/address';
import { User } from '../models/user';
import { PatientServiceService } from '../service/patient-service.service';
// import {TokenStorageService} from '../auth_service/token-storage.service';
// import {Router} from '@angular/router';


@Component({
  selector: 'app-user-doctor',
  templateUrl: './user-doctor.component.html',
  styleUrls: ['./user-doctor.component.css']
})
export class UserDoctorComponent implements OnInit {

  content?:string;
  constructor(private userService: DasUserService,
    // ,
    // private tokenStorageService: TokenStorageService,
    // private router:Router
    private patientService:PatientServiceService
    ) { }
    newAddress:Address = new Address(2, "", "", "", 1, "");
    doctor:User = new User(99999999, "", "", "", "", "", "", "", 0, this.newAddress, new Date(), "");

  ngOnInit(): void {
    this.userService.getUserDoctor().subscribe(
      data =>{
        this.content = data;
      },
      err=>{
        this.content = JSON.parse(err.error).message;
      }
    )

    this.getDoctor();
  }

  formatImage(img:any): any {
    return 'data:image/jpeg;base64,' + img;
  }

  getDoctor() {
    this.patientService.getPatient().subscribe(
      (data) => {
        this.doctor = data;
      },
      () => {
        console.log("Oops, something went wrong.");
      }
    )
  }


  // logout(): void {
  //   this.tokenStorageService.logOut();
  //   window.location.reload();
  //   this.router.navigate(['/login']); // navigate to login page
  // }
}

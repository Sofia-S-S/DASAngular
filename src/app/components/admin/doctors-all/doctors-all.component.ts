import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-doctors-all',
  templateUrl: './doctors-all.component.html',
  styleUrls: ['./doctors-all.component.css']
})
export class DoctorsAllComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.allDoctors()
    // this.oneDoctor()
  }
  doctors: User[] = [];

  allDoc: boolean = false;
  oneDoc: boolean = true;

  allDoctors(){
    this.allDoc = false;
    this.oneDoc = true;
    this.adminService.getAllDoctors().subscribe(
            //we can define 2 callback f-ns (when working with Observable)
      //1.succsess
      data => {
        this.doctors = data
        console.log(data);
        console.log(this.doctors);
      },
      //2.an error
      () => {
        console.log("Oooppps!Something went wrong")
      }
    )
  }
     //Show all doctors and hihe Update form
    

    //Error message set to not visible
    hideMessage: boolean = true;
    hideError: boolean = true;
   
    //Get id
    address:Address = new Address(1,"","","",1,"")
    doctor: User = new User(1,"","","","","","","",0,this.address,new Date,"")
    // doctor2: User = new User(1,"","","","","","","",0,this.address,new Date,"")

    oneDoctor(id:number){
    
    this.allDoc = true;
    this.oneDoc = false;
    this.adminService.getDoctorById(id).subscribe(
      (data) => {
        this.doctor = data;
        console.log("onedoctor")
        console.log(data)
               //hide form and show a succsess message    
      },
      () => {
      console.log("could not update doctor info")
    
    }
    
    )
  }
id: number = 0;
  updateDoctor(){
    
    console.log("Before update")
    console.log(this.doctor)
    this.adminService.updateDoctor(this.doctor).subscribe(
      (data) => {
        console.log("update")
        console.log(data)
               //hide form and show a succsess message
    
               this.hideError = true;
               this.hideMessage = false;
                  //refresh doctors after updating
                  this.allDoctors()
                  //hide form and show all doctors
      },
      () => {
      console.log("could not creat doctor")
      this.hideError = false;
      this.hideMessage = true;
    }
    )
  }
}


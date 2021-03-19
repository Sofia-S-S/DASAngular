import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-doctor-new',
  templateUrl: './doctor-new.component.html',
  styleUrls: ['./doctor-new.component.css']
})
export class DoctorNewComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }
  //All users will have same address with id=1
  //Need to create address first then create user with that address
  address:Address = new Address(1,"","","",1,"")

  //Make sure we do not have user with that id
  newDoctor: User = new User(99999999,"","","","","","","",0,this.address,new Date,"Doctor")

  createDoctor(){
    this.adminService.createDoctor(this.newDoctor).subscribe(
      (data) => {
        console.log(data)
      },
      () => {
      console.log("could not creat doctor")
    }
    )
  }
}

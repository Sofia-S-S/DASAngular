import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { Bill } from 'src/app/models/bill';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-bill-new',
  templateUrl: './bill-new.component.html',
  styleUrls: ['./bill-new.component.css']
})
export class BillNewComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }
  // initialize with fake data
  address:Address = new Address(1,"","","",1,"")
  user:User = new User(1,"","","","","","","",1,this.address,new Date,"")
  newBill:Bill = new Bill(1111111,this.user,1,new Date,new Date)

  createBill(){
    this.adminService.createBill(this.newBill).subscribe(
      (data) => {
        console.log(data)
      },
      () => {
      console.log("could not creat bill")
    }
    )
  }
}

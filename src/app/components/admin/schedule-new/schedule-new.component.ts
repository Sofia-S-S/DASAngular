import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Address } from 'src/app/models/address';
import { Appointment } from 'src/app/models/appointment';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-schedule-new',
  templateUrl: './schedule-new.component.html',
  styleUrls: ['./schedule-new.component.css']
})
export class ScheduleNewComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }
  address:Address = new Address(1,"","","",1,"")
  user: User = new User(99999999,"","","","","","","",0,this.address,new Date,"")
  spot: Appointment = new Appointment(999999999,new Date(),this.user,this.user,"")


}

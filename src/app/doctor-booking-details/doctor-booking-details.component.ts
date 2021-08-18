import { Component, OnInit } from '@angular/core';
import {} from '../patientBooking';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import {MailUser} from '../mail-user';
@Component({
  selector: 'app-doctor-booking-details',
  templateUrl: './doctor-booking-details.component.html',
  styleUrls: ['./doctor-booking-details.component.css']
})
export class DoctorBookingDetailsComponent implements OnInit {
   mailuser = new MailUser();
  constructor(private _service : EmployeeService , private _router : Router) { }

  ngOnInit(): void {
  }


  navigateToHome() {
    this._router.navigateByUrl('/home');
 }
  mailUser(){
    {
      this._service.createMailService(this.mailuser).subscribe(
        _data =>
        {
          console.log(" mail the response---"+this.mailuser);
      }
    )
} }
}
  

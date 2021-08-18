import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import {Employee} from '../employee';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  employee = new Employee();
 msg = '';
  constructor(private _service : EmployeeService , private _router : Router) { }

  ngOnInit(): void {
  }


  registerUser()
  {
    this.employee.role = "Patient";
    this.employee.specialization="Patient";
    
this._service.registerUserFromRemote(this.employee).subscribe(
  _data =>
  {
    console.log(" recieved the response");
    this.msg = "Registration Successful";
  } ,
  _error=> 
  {
    console.log("exception occured");
    this.msg = "There was a problem";
  }
)
}

}

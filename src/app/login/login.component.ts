import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import {Employee} from '../employee';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee = new Employee();
  msg = '';
  userOptions = ["Doctor","Admin","Patient"];
  constructor(private _service : EmployeeService , private _router : Router) { }

  ngOnInit(): void {

  }

  loginUser()
  {
this._service.loginUserFromRemote(this.employee).subscribe(
  _data =>
  {
    console.log(" recieved the response");
    if(this.employee.role == "Patient"){
    this._router.navigate(['/loginsuccess',_data.userName]);
    }else if(this.employee.role == "Admin"){
      this._router.navigate(['/admin-details-page/',_data.userName]);
    }else if(this.employee.role == "Doctor"){
      this._router.navigate(['/doctor',_data.userName,_data.specialization]);
    }
  } ,
  _error=> 
  {
    console.log("exception occured");
    this.msg = "Bad Credentials,Please provide valid details";
  }
)
}
}

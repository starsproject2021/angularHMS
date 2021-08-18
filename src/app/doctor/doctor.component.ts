import { Component, OnInit } from '@angular/core';
import {Doctor} from '../doctor';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  username : any;
  doctors!: Doctor[];
  specialization: any;
  reportingDoctor : any;
  constructor(private employeeService : EmployeeService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {

    this.username = this.route.snapshot.params['username'];
    this.specialization =  this.route.snapshot.params['specialization'];
    this.reportingDoctor = this.route.snapshot.params['reportingDoctor'];
    this.employeeService.patientDetailsListForDoctor(this.reportingDoctor,this.specialization).subscribe(data =>{
      console.log(this.username,this.specialization, this.reportingDoctor);
    this.doctors = data;
    });


  }

  navigateToLogin() {
    this.router.navigateByUrl('/home');
 }

}

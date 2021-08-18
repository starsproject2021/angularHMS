import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import {PatientBooking} from '../patientBooking';
@Component({
  selector: 'app-patient-booking-details',
  templateUrl: './patient-booking-details.component.html',
  styleUrls: ['./patient-booking-details.component.css']
})
export class PatientBookingDetailsComponent implements OnInit {
  username : any;
  patientBookings!: PatientBooking[];
  
  constructor(private employeeService : EmployeeService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.employeeService.retreivePatientBookingDetails(this.username).subscribe(data =>{
      this.patientBookings = data;
    });

  }

}

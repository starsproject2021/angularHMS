import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Patient } from '../Patient';
import { PatientBooking } from '../patientBooking';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Optional } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  employees!: Employee[];
  doctorsListBasedOnSpecialization:any = {};
  specializationsList!: Set<string>; 
  doctorsDropDown: string[] = [];
  patientBooking = new PatientBooking();
  bookingDetailsForPatient!: any;
  appointmentDate: any;
  userName:any;
  patientsDetails!:Patient[];
  patientDetails!:any;
  patientBookings!: PatientBooking[];
  constructor(private employeeService: EmployeeService, private router:Router, private route : ActivatedRoute, public dialogRef: MatDialogRef<AppointmentComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

this.userName =  data.pageValue;
      
     }

  ngOnInit(): void {
    console.log("hiii"+this.userName);
  this.employeeService.getEmployeesList().subscribe(data =>{
   this.employees = data;

   this.specializationsList = new Set(this.employees.map(eachEmployee => eachEmployee.specialization));
   
   this.specializationsList.forEach(eachSpecialization =>{ 
     this.doctorsListBasedOnSpecialization[eachSpecialization] = this.employees.filter(s=>s.specialization.includes(eachSpecialization));
   });

  });
  
  this.employeeService.retreivePatientBookingDetails(this.userName).subscribe(data =>{
    this.patientBookings = data;
  });
  }

  onSelectionOfSpecialization(value:string){
    this.doctorsDropDown =[];
    this.doctorsListBasedOnSpecialization[value].forEach((element: { userName: any; }) => {
      this.doctorsDropDown.push(element.userName);
     });
     console.log(this.doctorsDropDown);
  }

  bookAppoinmentForPatient(){
    console.log("In the method"+this.userName);
    this.patientBooking.dateOfAppointment = this.appointmentDate;
  this.employeeService.getAllPatients().subscribe(res => {
   this.patientsDetails =  res.filter(eachPatient => eachPatient.userName === this.userName);
    this.patientDetails = this.patientsDetails[0];
    this.patientBooking.userName = this.userName;

  this.employeeService.createBooking(this.patientBooking).subscribe(data =>{
    if(data !== null){
      this.bookingDetailsForPatient = data;
      this.employeeService.retreivePatientBookingDetails(this.userName).subscribe(data =>{
        this.patientBookings = data;
        this.dialogRef.close(this.patientBookings);
      
      });
    }
  });
  
});
  }
  }



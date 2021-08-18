import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Patient } from '../Patient';
import { PatientBooking } from '../patientBooking';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppointmentComponent } from '../appointment/appointment.component';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
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
  dialogValue!: any;

  constructor(private employeeService: EmployeeService, private router:Router, private route : ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['userName'];
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
    this.patientBooking.dateOfAppointment = this.appointmentDate;
  this.employeeService.getAllPatients().subscribe(res => {
   this.patientsDetails =  res.filter(eachPatient => eachPatient.userName === this.userName);
    this.patientDetails = this.patientsDetails[0];
    this.patientBooking.userName = this.patientDetails.userName;

  this.employeeService.createBooking(this.patientBooking).subscribe(data =>{
    if(data !== null){
      this.bookingDetailsForPatient = data;
      this.employeeService.retreivePatientBookingDetails(this.userName).subscribe(data =>{
        this.patientBookings = data;
      });
    }
  });
  
});
  }

  // openDialog(userName: any)
  // {
    
  //   console.log("in login success-----"+userName)
  //   this.dialog.open(AppointmentComponent,userName)


  // }

  openDialog(userName: any): void {
    console.log("in login success-----"+userName)
    const dialogRef = this.dialog.open(AppointmentComponent, {
      width: '550px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { pageValue:userName }
    });

    dialogRef.afterClosed().subscribe(result => {
  console.log('The dialog was closed', result);
  this.dialogValue = result.data;
});

}



navigateToLogin() {
   this.router.navigateByUrl('/home');
}

}

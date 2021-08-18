import { Component, OnInit } from '@angular/core';
import {Employee } from '../employee'
import { EmployeeService } from '../employee.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-admin-details-page',
  templateUrl: './admin-details-page.component.html',
  styleUrls: ['./admin-details-page.component.css']
})
export class AdminDetailsPageComponent implements OnInit {
  employees!: Employee[];
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  navigateToLogin() {
    this.router.navigateByUrl('/home');
 }
 

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import {User} from './../assets/user'
import { PatientBooking } from './patientBooking';
import { Patient } from './Patient';
import { Doctor } from './doctor';
import { MailUser } from './mail-user';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8081/api";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
  }

  getDoctorsList(roleName: string): Observable<Employee[]>{
    let params = new HttpParams();
    params = params.append('roleName', roleName);
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employeesByRole`,{params: params});
  }

  createEmployee(employee : Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/createEmployee`,employee);
  }

  createBooking(patientBooking: PatientBooking){
    return this.httpClient.post("http://localhost:8081/api/createBooking",patientBooking);
  }


createMailService(user: MailUser){
    return this.httpClient.post("http://localhost:8081/api/sendemail",user);
  }


  public loginUserFromRemote(user : Employee):Observable<any>
  {
    return  this.httpClient.post<any>("http://localhost:8081/login/employee",user);
    // if(user.role == 'Doctor' || user.role == 'Admin'){
    // return  this.httpClient.post<any>("http://localhost:8081/login/employee",user);
    // }else {
    //   return this.httpClient.post<any>("http://localhost:8081/login/patient",user);
    // }
  }

  public registerUserFromRemote(user : Employee):Observable<any>
  {
    return  this.httpClient.post<any>("http://localhost:8081/registerUser",user)
  }

  getEmployeeById(id : number):Observable<Employee>
  {
    return  this.httpClient.get<Employee>(`${this.baseURL}/employees/${id}`);
  }

  updateEmployee(id : number,employee:Employee):Observable<Object>
  {
    console.log("hello world");
    return  this.httpClient.put(`${this.baseURL}/employees/${id}`,employee);
  }

deleteEmployee(id : number):Observable<Object>
{
  console.log("in delete");
  return  this.httpClient.delete(`${this.baseURL}/employees/${id}`);
}

retreivePatientBookingDetails(patientName:string):Observable<PatientBooking[]>
{
  return this.httpClient.get<PatientBooking[]>(`${this.baseURL}/bookingInfo/${patientName}`);
}

getAllPatients():Observable<Patient[]>
{
  return this.httpClient.get<Patient[]>("http://localhost:8081/api/getAllPatients");
}


patientDetailsListForDoctor(reportingDoctor:string, specialization:string):Observable<Doctor[]>

{
  return this.httpClient.get<Doctor[]>(`${this.baseURL}/bookingInfo/${reportingDoctor}/${specialization}`);
}




}


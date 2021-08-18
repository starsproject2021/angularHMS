import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './../app/login/login.component';
import { RegistrationComponent } from './../app/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { PatientBookingDetailsComponent } from './patient-booking-details/patient-booking-details.component';
import { DoctorBookingDetailsComponent } from './doctor-booking-details/doctor-booking-details.component';
import { AdminDetailsPageComponent } from './admin-details-page/admin-details-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AppointmentComponent } from './appointment/appointment.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    AdminComponent,
    DoctorComponent,
    EmployeeDetailsComponent,
    HomeComponent,
    PatientBookingDetailsComponent,
    DoctorBookingDetailsComponent,
    AdminDetailsPageComponent,
    AppointmentComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

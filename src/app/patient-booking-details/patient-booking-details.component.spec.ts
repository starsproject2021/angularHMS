import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBookingDetailsComponent } from './patient-booking-details.component';

describe('PatientBookingDetailsComponent', () => {
  let component: PatientBookingDetailsComponent;
  let fixture: ComponentFixture<PatientBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientBookingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

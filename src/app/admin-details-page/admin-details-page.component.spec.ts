import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailsPageComponent } from './admin-details-page.component';

describe('AdminDetailsPageComponent', () => {
  let component: AdminDetailsPageComponent;
  let fixture: ComponentFixture<AdminDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

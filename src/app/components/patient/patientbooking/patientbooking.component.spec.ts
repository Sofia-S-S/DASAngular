import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientbookingComponent } from './patientbooking.component';

describe('PatientbookingComponent', () => {
  let component: PatientbookingComponent;
  let fixture: ComponentFixture<PatientbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

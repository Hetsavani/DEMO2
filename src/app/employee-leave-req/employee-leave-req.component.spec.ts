import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveReqComponent } from './employee-leave-req.component';

describe('EmployeeLeaveReqComponent', () => {
  let component: EmployeeLeaveReqComponent;
  let fixture: ComponentFixture<EmployeeLeaveReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeLeaveReqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeLeaveReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAttendComponent } from './emp-attend.component';

describe('EmpAttendComponent', () => {
  let component: EmpAttendComponent;
  let fixture: ComponentFixture<EmpAttendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpAttendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpAttendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

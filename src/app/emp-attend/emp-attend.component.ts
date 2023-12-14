import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-attend',
  templateUrl: './emp-attend.component.html',
  styleUrl: './emp-attend.component.css'
})
export class EmpAttendComponent {
  arr = [{
    emp_id:1,
    name:'Het savani',
    attend:'93%'
  }]
  makeReq(){
    
  }
}

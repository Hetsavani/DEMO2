import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrl: './show-emp.component.css'
})
export class ShowEmpComponent {
  // constructor(private _HTTP:)
  // apiUrl:""
  arr = [{
    emp_id:1,
    name:'Het savani'
  }]
  makeReq(){
    
  }
}

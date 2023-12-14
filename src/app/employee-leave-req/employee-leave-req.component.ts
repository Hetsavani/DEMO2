import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Console } from 'console';
import { LeaveApiService } from '../leave-api.service';

@Component({
  selector: 'app-employee-leave-req',
  templateUrl: './employee-leave-req.component.html',
  styleUrl: './employee-leave-req.component.css'
})
export class EmployeeLeaveReqComponent {
  reqArr=[
    {
      Employee_id:"",
      req_type:""
    }
  ]
  constructor(private _api: LeaveApiService){
  }
  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
      console.log(res);
      this.reqArr = res;
    })
  }
  flag = false;
  makeReq(){
    this.flag = !this.flag
  }
}

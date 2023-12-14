import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveApiService {

  constructor(private _HTTP:HttpClient) { 

  }
  apiUrl = "http://localhost:4000/leave_req"
  getAll(){
    console.log("check")
    return this._HTTP.get(this.apiUrl);
  }
}

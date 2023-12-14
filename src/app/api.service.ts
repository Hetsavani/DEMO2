import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HTTP:HttpClient) { }
  apiUrl:string = 'http://localhost:3030/employee'
  getAll(){
    return this._HTTP.get(this.apiUrl);
  }
}

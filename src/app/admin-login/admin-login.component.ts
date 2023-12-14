import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  arr = [{Employee_username:"",Employee_password:""}];
  constructor(private _api:ApiService,private _router:Router){}
  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
      console.log(res);
      this.arr = res
    });
  }
  loginForm: FormGroup = new FormGroup({
    Username: new FormControl('',[Validators.required,Validators.minLength(3), // Minimum length of 3 characters
    Validators.maxLength(20)]),
    Password: new FormControl('',[Validators.required,Validators.minLength(3), // Minimum length of 3 characters
    Validators.maxLength(30)])
  })
  isFound = false;
  login(){
    console.log(this.loginForm.value)
    // for(let i=0;i<this.arr.length;i++){
    //   if(this.arr[i].Employee_username == this.loginForm.value.Username && this.arr[i].Employee_password == this.loginForm.value.Password){
    //     // console.log("Logged in successfully")
    //     this.isFound = true;
    //     break;
    //   }
    // }

    if(!this.loginForm.valid){
      this._router.navigate(['/login']);
    }else{
      if(this.loginForm.value.Username == 'arjun' && this.loginForm.value.Password == 'bala'){
        this._router.navigate(['/admin']);
      }
    }
    
  }
}

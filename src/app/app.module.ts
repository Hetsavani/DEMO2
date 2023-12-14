import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmployeeLeaveReqComponent } from './employee-leave-req/employee-leave-req.component';
import { HeroComponent } from './hero/hero.component';
import { LeaveBalanceComponent } from './leave-balance/leave-balance.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SalaryComponent } from './salary/salary.component';
import { FormAddComponent } from './form-add/form-add.component';
import { ShowEmpComponent } from './show-emp/show-emp.component';
import { EmpAttendComponent } from './emp-attend/emp-attend.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeLeaveReqComponent,
    HeroComponent,
    LeaveBalanceComponent,
    HomeAdminComponent,
    AttendanceComponent,
    AdminLoginComponent,
    SalaryComponent,
    FormAddComponent,
    ShowEmpComponent,
    EmpAttendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

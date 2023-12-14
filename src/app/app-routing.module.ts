import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeLeaveReqComponent } from './employee-leave-req/employee-leave-req.component';
import { HeroComponent } from './hero/hero.component';
import { LeaveBalanceComponent } from './leave-balance/leave-balance.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormAddComponent } from './form-add/form-add.component';
import { ShowEmpComponent } from './show-emp/show-emp.component';
import { EmpAttendComponent } from './emp-attend/emp-attend.component';

const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'emp_leave_req', component:EmployeeLeaveReqComponent},
  {path:'leave-balance', component:LeaveBalanceComponent},
  {path:'admin', component:HomeAdminComponent},
  // {path:'attendance',component:AttendanceComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'empreg', component:FormAddComponent},
  {path:'showEmp', component:ShowEmpComponent},
  {path:'attendance',component:EmpAttendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

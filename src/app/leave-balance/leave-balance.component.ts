import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-balance',
  templateUrl: './leave-balance.component.html',
  styleUrl: './leave-balance.component.css'
})
export class LeaveBalanceComponent {

  card = [
    { id: 1, EmpName: 'Vacation', days: 1, msg: 'Available', EmpImg: './assets/vacationleave.png' },
    { id: 2, EmpName: 'Casual Leave', days: 2, msg: 'Available', EmpImg: './assets/casualleave.png' },
    { id: 3, EmpName: 'Floating Holiday', days: 4, msg: 'Available', EmpImg: './assets/imd2.jpg' },
    { id: 4, EmpName: 'sick leaves', days: 5, msg: 'Available', EmpImg: './assets/sickleave.png' },
  ];
}

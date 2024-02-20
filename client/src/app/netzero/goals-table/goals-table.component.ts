import { Component } from '@angular/core';
import { IGoal } from 'src/app/interfaces/goal.interface';

@Component({
  selector: 'app-goals-table',
  templateUrl: './goals-table.component.html',
  styleUrls: ['./goals-table.component.scss'],
})
export class GoalsTableComponent {
  goals: IGoal[] = [
    {
      _id: 'dsyba776138bs8iu89asa',
      initiative: 'Night Power Lights Out',
      assignee: '/assets/svgs/person-1.svg',
      division: 'Comp Division',
      email: 'jeoperez@gmail.com',
      status: 'in progress',
    },
    {
      _id: 'dsyba776138bs8iu89asa',
      initiative: 'EV Leasing Fleet',
      assignee: '/assets/svgs/person-2.svg',
      division: 'Comp Division',
      email: 'jeniffer@gmail.com',
      status: 'in progress',
    },
    {
      _id: 'dsyba776138bs8iu89asa',
      initiative: 'Reduce air travel by 20%',
      assignee: '/assets/svgs/person-3.svg',
      division: 'Comp Division',
      email: 'stephen@gmail.com',
      status: 'completed',
    },
  ];
}

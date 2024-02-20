import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  tabledata:{
    project:string,
    team: any[],
    deadline: any,
    progress: any,
  }[]=[
    {
      project: "Night Power Switch",
      team: [
          '/assets/images/team.png',
      ],
      deadline: 2034,
      progress: 40,
    },
    {
      project: "Electric Vehicles",
      team: [
          '/assets/images/team.png',
      ],
      deadline: 2030,
      progress: 60,
    },
    {
      project: "Night Power Switch",
      team: [
          '/assets/images/team.png',
      ],
      deadline: 2034,
      progress: 40,
    },
    {
      project: "Electric Vehicles",
      team: [
          '/assets/images/team.png',
      ],
      deadline: 2030,
      progress: 60,
    },
  ]
}

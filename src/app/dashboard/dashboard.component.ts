import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { MemberService } from 'src/services/member.service';
import { ChartDataset, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  nbTeachers: number = 0;
  nbStudents: number = 0;
  Nb_members: number = 0;
  Nb_events: number = 0;
  Nb_tools: number = 0;
  Nb_articles: number = 0;
  chartData: ChartDataset[] = [
    {
      label: '$ in millions',
      data: [],
    },
  ];
  chartLabels: string[] = ['nbTeachers', 'nbStudents'];
  chartOptions: ChartOptions = {};

  constructor(private MS: MemberService, private ES: EventService) {
    this.MS.getAllMembers().subscribe((data) => {
      this.Nb_members = data.length;
      for (let i = 0; i < this.Nb_members; i++) {
        if (data[i].type == 'student') {
          this.nbStudents++;
        } else {
          this.nbTeachers++;
        }
        this.chartData = [
          {
            label: '$ in millions',
            data: [this.nbTeachers,this.nbStudents ],
          },
        ];
      }
      console.log(
        'nbstudents :',
        this.nbStudents,
        'nbteachers',
        this.nbTeachers
      );
    });
    this.ES.getAllEvents().subscribe((data) => {
      this.Nb_events = data.length;
    });
  }
}

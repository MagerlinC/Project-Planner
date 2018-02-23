import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project Planner';
  type;
  data;
  options;

  constructor() {
    this.type = 'line';
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Example Dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false
    };
  }
}

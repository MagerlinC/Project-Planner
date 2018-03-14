import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {Color} from './Color';
import {Constants} from "./Constants";
import {MatSidenav} from "@angular/material";
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETA';
  mobileQuery: MediaQueryList;
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public lineChartData: Array<any> = [
    {data: [10, 19, 31], label: 'History'},
    {data: [0, 0, 31, 40, 48, 65, 75, 81], label: 'Worst'},
    {data: [0, 0, 31, 45, 58, 77, 81, 89], label: 'Average'},
    {data: [0, 0, 31, 48, 59, 80, 88, 96], label: 'Best'},
    {data: [null, null, 100], label: 'Today', lineTension: 0}
  ];
  public lineChartLabels: Array<any> = ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6', 'Sprint 7', 'Sprint 8'];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Accumulated Points Completed'
        }
      }]
    },
  };


  public lineChartColors: Array<any> = [
    { // History - brown
      backgroundColor: Constants.BROWN.toRGBAString(),
      borderColor: Constants.toBorderColor(Constants.BROWN),
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // Worst - light red
      backgroundColor: Constants.LIGHTRED.toRGBAString(),
      borderColor: Constants.toBorderColor(Constants.LIGHTRED),
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // Average - light blue
      backgroundColor: Constants.LIGHTBLUE.toRGBAString(),
      borderColor: Constants.toBorderColor(Constants.LIGHTBLUE),
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // Best - green
      backgroundColor: Constants.GREEN.toRGBAString(),
      borderColor: Constants.toBorderColor(Constants.GREEN),
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // Today - black
      backgroundColor: new Color(0, 0, 0, 1).toRGBAString(),
      borderColor: '#fff',
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  public randomize(): void {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}

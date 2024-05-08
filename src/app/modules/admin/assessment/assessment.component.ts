import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../../shared/shared/shared.module';
import { AnalyticsService } from '../../../services/analytics.service';
import { faCalendar, faClock, faEnvelope, faEllipsisV, faFile, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexOptions } from 'apexcharts';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [
    SharedModule,
    // NgApexchartsModule,
    ],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss'
})
export class AssessmentComponent implements OnInit {

  faCalendar = faCalendar;
  faClock = faClock;
  faEnvelope = faEnvelope;
  faDotVertical = faEllipsisV;
  faFile = faFile;
  faArrowRight = faArrowRight;
  faPlus = faPlus;

  students: any[] = [];
  analytics: any[] =[];
  data: any;

//   chartVisitors: ApexOptions;
  chartVisitors: ApexOptions = {
    series: [
      {
        name: "Visitors",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ],
    chart: {
      height: 350,
      type: 'line'
    },
    // You can add other chart options here
  };

  constructor(private _analyticService: AnalyticsService) {
    // console.log("Constructor - chartVisitors:", this.chartVisitors);
   }

  ngOnInit(): void {
    // console.log("OnInit - chartVisitors:", this.chartVisitors);
    // this._analyticService.getData().subscribe({
      //   next: (data) => {
      //             this.analytics = data;
      //             console.log('analytics data:', data);
      //         },
      //         error: (err) => {
      //             console.error('Failed to load students:', err);
      //         }
      // })

    //   this._prepareChartData();

    // this.chartVisitors = {
    //   series: [{
    //     name: "Visitors",
    //     data: [30, 40, 45, 50, 49, 60, 70, 91]
    //   }],
    //   chart: {
    //     type: 'line',
    //     height: 350
    //   }
    // };
  }

  private _prepareChartData(): void {

    // Visitors
      this.chartVisitors = {
            chart     : {
                animations: {
                    speed           : 400,
                    animateGradually: {
                        enabled: false
                    }
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                width     : '100%',
                height    : '100%',
                type      : 'area',
                toolbar   : {
                    show: false
                },
                zoom      : {
                    enabled: false
                }
            },
            colors    : ['#818CF8'],
            dataLabels: {
                enabled: false
            },
            fill      : {
                colors: ['#312E81']
            },
            grid      : {
                show       : true,
                borderColor: '#334155',
                padding    : {
                    top   : 10,
                    bottom: -40,
                    left  : 0,
                    right : 0
                },
                position   : 'back',
                xaxis      : {
                    lines: {
                        show: true
                    }
                }
            },
            // series    : this.data.visitors.series,
            series: [
              {
                name: 'Visitors',
                data: [
                  { x: new Date('2023-05-01').getTime(), y: 450 },
                  { x: new Date('2023-05-02').getTime(), y: 500 },
                  { x: new Date('2023-05-03').getTime(), y: 480 },
                  // Add more data points here
                ]
              }
            ],
            stroke    : {
                width: 2
            },
            tooltip   : {
                followCursor: true,
                theme       : 'dark',
                x           : {
                    format: 'MMM dd, yyyy'
                },
                y           : {
                    formatter: (value: number): string => `${value}`
                }
            },
            xaxis     : {
                axisBorder: {
                    show: false
                },
                axisTicks : {
                    show: false
                },
                crosshairs: {
                    stroke: {
                        color    : '#475569',
                        dashArray: 0,
                        width    : 2
                    }
                },
                labels    : {
                    offsetY: -20,
                    style  : {
                        colors: '#CBD5E1'
                    }
                },
                tickAmount: 20,
                tooltip   : {
                    enabled: false
                },
                type      : 'datetime'
            },
            yaxis     : {
                axisTicks : {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                min       : (min): number => min - 750,
                max       : (max): number => max + 250,
                tickAmount: 5,
                show      : false
            }
    };
  }
}

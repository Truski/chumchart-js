import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chartCode;
  chart;
  status = 'Loading';

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.chartCode = this.route.snapshot.paramMap.get('code');
    this.quizService.getChart(this.chartCode).subscribe( result => {
      if (result.status === 'Failure') {
        this.status = 'NotFound';
      } else {
        this.chart = result.chart;
        this.status = 'Chart';
      }
    });
  }

}

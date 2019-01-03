import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  showingInput = false;
  quizCode: string;
  showingError = false;

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit() {
  }

  onClickJoinExisting(): void {
    this.showCodeInput();
  }

  showCodeInput(): void {
    this.showingInput = !this.showingInput;
  }

  onClickStartQuiz(): void {
    if (this.quizCode) {
      this.hideErrorNonexistentCode();
      this.quizService.getChartStatus(this.quizCode).subscribe(result => {
        console.log(result);
        if (result.status === 'Nonexistent') {
          this.showErrorNonexistentCode();
        } else if (result.status === 'Incomplete') {
          this.router.navigate(['quiz', this.quizCode]);
        } else if (result.status === 'Complete') {
          this.router.navigate(['chart', this.quizCode]);
        }
      });
    }
  }

  hideErrorNonexistentCode(): void {
    this.showingError = false;
  }

  showErrorNonexistentCode(): void {
    this.showingError = true;
  }

}

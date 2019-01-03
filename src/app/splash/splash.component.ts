import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { QuizComponent } from '../quiz/quiz.component';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  showingInput = false;
  quizCode: string;

  constructor(private router: Router) { }

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
      this.router.navigate(['quiz', this.quizCode]);
    }
  }

}

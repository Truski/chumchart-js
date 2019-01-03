import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from './question';
import { Answer } from './answer';

import { QuestionsService } from '../questions.service';
import { QuizService } from '../quiz.service';

enum State {
  Loading,
  Questions,
  Image,
  Name,
  Thanks
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  state: State = State.Loading;
  currentQuestionIndex = 0;
  questions: Question[];
  currentQuestion: Question;
  name: string;
  moralTotal = 0;
  ethicTotal = 0;
  image: File;

  peopleLeft: Number;
  chartCode: string;

  constructor(
    private router: Router,
    private questionsService: QuestionsService,
    private quizService: QuizService
  ) { }

  ngOnInit() {
    // this.questions = this.questionsService.getQuestions();
    this.questionsService.loadQuestions().subscribe(questions => {
      this.onFinishLoading(questions);
    });
  }

  onFinishLoading(questions: Question[]): void {
    this.questions = questions;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.state = State.Name;
  }

  onClickContinue(): void {
    if (this.name) {
      this.switchToQuestionView();
    } else {
      alert('Please enter a name');
    }
  }

  switchToQuestionView(): void {
    this.state = State.Questions;
  }

  submitAnswer(a: Answer): void {
    this.moralTotal += a.moral;
    this.ethicTotal += a.ethic;
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex === this.questions.length) {
      this.switchToImageUpload();
    } else {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    }
  }

  switchToImageUpload(): void {
    this.state = State.Image;
  }

  inLoadingState(): boolean {
    return this.state === State.Loading;
  }

  inNameState(): boolean {
    return this.state === State.Name;
  }

  inQuestionsState(): boolean {
    return this.state === State.Questions;
  }

  inImageState(): boolean {
    return this.state === State.Image;
  }

  inThanksState(): boolean {
    return this.state === State.Thanks;
  }

  onFileChanged(event): void {
    console.log(event.target.files[0]);
    this.image = event.target.files[0];
    this.state = State.Loading;
    this.quizService.uploadQuiz({
      name: this.name,
      moral: this.moralTotal,
      ethic: this.ethicTotal,
      image: this.image
    }).subscribe(response => {
      if (response.isLastPerson) {
        this.router.navigate(['/chart', response.chartCode]);
      } else {
        this.peopleLeft = response.peopleLeft;
        this.chartCode = response.chartCode;
        this.state = State.Thanks;
      }
    });
  }
}

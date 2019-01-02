import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { Answer } from './answer';
import { QuestionsService } from '../questions.service';

enum State {
  Name,
  Questions,
  Image
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  state: State = State.Name;
  currentQuestionIndex = 0;
  questions: Question[];
  currentQuestion: Question;
  name: string;
  moralTotal = 0;
  ethicTotal = 0;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questions = this.questionsService.getQuestions();
    this.currentQuestion = this.questions[this.currentQuestionIndex];
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

  inNameState(): boolean {
    return this.state === State.Name;
  }

  inQuestionsState(): boolean {
    return this.state === State.Questions;
  }

  inImageState(): boolean {
    return this.state === State.Image;
  }

  onFileChanged(event): void {
    console.log(event);
  }
}

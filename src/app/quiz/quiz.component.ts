import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { Answer } from './answer';

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

  constructor() { }

  ngOnInit() {
    const answer: Answer = {text: 'Yo you look just like this kid I think i saw on a buster rhymes video.', moral: 2, ethic: 3};
    const answer2: Answer = { text: 'Dang', moral: 2, ethic: 3};
    this.questions = [{text: 'How many fingers?', answers: [answer, answer2]}];
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

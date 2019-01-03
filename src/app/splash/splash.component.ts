import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  showingInput = false;
  quizCode: string;

  constructor() { }

  ngOnInit() {
  }

  onClickJoinExisting(): void {
    this.showCodeInput();
  }

  showCodeInput(): void {
    this.showingInput = true;
  }

}

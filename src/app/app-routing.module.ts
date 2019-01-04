import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { QuizComponent } from './quiz/quiz.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: ':code', component: SplashComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz/:code', component: QuizComponent },
  { path: 'chart/:code', component: ChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

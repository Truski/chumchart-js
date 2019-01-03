import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Question } from './quiz/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  loadQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('http://localhost:8000/api/questions');
  }
}

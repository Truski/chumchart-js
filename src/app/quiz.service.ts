import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  uploadQuiz(quiz): Observable<any> {
    console.log('we got to the service');
    const uploadData = new FormData();
    uploadData.append('image', quiz.image, quiz.image.name);
    uploadData.append('name', quiz.name);
    uploadData.append('moral', this.normalize(quiz.moral));
    uploadData.append('ethic', this.normalize(quiz.ethic));
    uploadData.append('code', quiz.chartCode);
    console.log(uploadData.get('image'));
    return this.http.post<any>('http://localhost:8000/api/quiz', uploadData);
  }

  normalize(score: number): string {
    return '' + (-1 * ((score * 2) / 15 - 1));
  }
}

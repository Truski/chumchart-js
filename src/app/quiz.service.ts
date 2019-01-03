import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getChartStatus(chartCode: string): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/chartstatus/' + chartCode);
  }

  uploadQuiz(quiz): Observable<any> {
    const uploadData = new FormData();
    uploadData.append('image', quiz.image, quiz.image.name);
    uploadData.append('name', quiz.name);
    uploadData.append('moral', this.normalize(quiz.moral));
    uploadData.append('ethic', this.normalize(quiz.ethic));
    uploadData.append('code', quiz.chartCode);

    return this.http.post<any>('http://localhost:8000/api/quiz', uploadData);
  }

  normalize(score: number): string {
    return '' + (-1 * ((score * 2) / 15 - 1));
  }
}

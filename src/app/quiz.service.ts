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
    uploadData.append('moral', quiz.moral);
    uploadData.append('ethic', quiz.ethic);
    uploadData.append('code', quiz.code);
    console.log(uploadData.get('image'));
    return this.http.post<any>('http://localhost:8000/api/quiz', uploadData);
  }
}

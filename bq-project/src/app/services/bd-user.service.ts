import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workers } from '../models/workers';
@Injectable({
  providedIn: 'root',
})
export class BdUserService {
  url = 'http://localhost:5000/users';

  constructor(private http: HttpClient) {}

  getBdUserService(): Observable<Workers[]> {
    return this.http.get<Workers[]>(this.url);
  }
  deleteBdUserService(workers: Workers): Observable<Workers> {
    const urlDelete = `${this.url}/${workers.id}`;
    return this.http.delete<Workers>(urlDelete);
  }
  postBdUserService(workers: Workers): Observable<Workers> {
    return this.http.post<Workers>(this.url, workers);
  }
}
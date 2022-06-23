import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workers, Users} from '../models/workers';
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
  postBdUserService(workers: Users): Observable<Users> {
    return this.http.post<Users>(this.url, workers);
  }
  updateBdUserService(workers: Workers): Observable<Workers>{
    const urlUpdate = `${this.url}/${workers.id}`;
    return this.http.put<Workers>(urlUpdate,workers);
  }
}

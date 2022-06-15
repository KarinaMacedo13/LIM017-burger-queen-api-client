import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workers } from '../models/workers';
@Injectable({
  providedIn: 'root',
})
export class BdUserService {
  url = 'http://localhost:5000/workers';

  constructor(private http: HttpClient) {}

  getBdUserService(): Observable<Workers[]> {
    return this.http.get<Workers[]>(this.url);
  }
}

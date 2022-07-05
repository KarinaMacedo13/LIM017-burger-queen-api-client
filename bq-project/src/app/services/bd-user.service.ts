import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Workers, Users} from '../models/workers';
@Injectable({
  providedIn: 'root',
})
export class BdUserService {
  subscribe(arg0: (res: any) => void) {
    throw new Error('Method not implemented.');
  }
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  @Output() disparadorSearch: EventEmitter<any> = new EventEmitter();
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
// Este es nuestro editor
  editBdUserService(id:number, workers: Users): Observable<Users>{
    const urlUpdate = `${this.url}/${id}`;
    console.log(urlUpdate);
    return this.http.put<Users>(urlUpdate, workers);
  }
}

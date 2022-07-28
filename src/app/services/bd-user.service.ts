import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Workers,
  Users,
  tokenLogin,
  Credentials,
  User,
} from '../models/workers';
@Injectable({
  providedIn: 'root',
})
export class BdUserService {
  subscribe(arg0: (res: any) => void) {
    throw new Error('Method not implemented.');
  }

  @Output() disparador: EventEmitter<any> = new EventEmitter();
  @Output() disparadorSearch: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  urlOnly = 'https://project-api-bq.herokuapp.com/';
  url = 'https://project-api-bq.herokuapp.com/users/';

  public user = {
    email: '',
    roles: {
      admin: true,
    },
    id: 0,
  };

  constructor(private http: HttpClient) {}
  accessToken = localStorage.getItem('accessToken');
  httpOptions = () => ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    }),
  });

  getToken(tokenLogin: any) {
    localStorage.setItem('accessToken', tokenLogin.accessToken);
    this.accessToken = tokenLogin.accessToken;
  }

  //Logueo de usuarios
  loginUsers(credentials: Credentials): Observable<tokenLogin> {
    return this.http.post<tokenLogin>(`${this.urlOnly}login`, credentials);
  }

  // Obtener todos los usuarios
  getBdUserService(): Observable<Workers[]> {
    return this.http.get<Workers[]>(this.url, this.httpOptions());
  }
  // Obteniendo usuarios por id
  getOneUser(tokenLogin: any): Observable<User> {
    return this.http.get<User>(
      `${this.url}${tokenLogin.user.id}`,
      this.httpOptions()
    );
  }

  deleteBdUserService(workers: Workers): Observable<Workers> {
    const urlDelete = `${this.url}${workers.id}`;
    return this.http.delete<Workers>(urlDelete, this.httpOptions());
  }
  postBdUserService(workers: Users): Observable<Users> {
    return this.http.post<Users>(this.url, workers, this.httpOptions());
  }
  // Este es nuestro editor
  editBdUserService(id: number, workers: Users): Observable<Users> {
    const urlUpdate = `${this.url}${id}`;
    return this.http.patch<Users>(urlUpdate, workers, this.httpOptions());
  }
}

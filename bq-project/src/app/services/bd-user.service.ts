import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Workers, Users, tokenLogin} from '../models/workers';
@Injectable({
  providedIn: 'root',
})
export class BdUserService {
  subscribe(arg0: (res: any) => void) {
    throw new Error('Method not implemented.');
  }
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  @Output() disparadorSearch: EventEmitter<any> = new EventEmitter();
  urlOnly = 'http://localhost:8080/';
  url = 'http://localhost:8080/users';
  worker!: Workers;

  constructor(private http: HttpClient) {}
  accessToken = localStorage.getItem('accessToken')
  httpOptions = () => (
    {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.accessToken}`
      })
  })

  getToken(tokenLogin:any){
    localStorage.setItem('accessToken', tokenLogin.accessToken);
    this.accessToken = tokenLogin.accessToken;
    console.log('imprimiendo get token', tokenLogin)
  }

  //Logueo de usuarios
 loginUsers(credentials: Users): Observable<tokenLogin> {
    return this.http.post<tokenLogin>(`${this.urlOnly}login`, credentials)
  }

  // Obtener todos los usuarios
  getBdUserService(): Observable<Workers[]> {
    return this.http.get<Workers[]>(this.url);
  }
// Obteniendo usuarios por id
  getOneUser(tokenLogin: any): Observable<Workers>{
  return this.http.get<Workers>(`${this.url}/${tokenLogin.worker.id}`, this.httpOptions())
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

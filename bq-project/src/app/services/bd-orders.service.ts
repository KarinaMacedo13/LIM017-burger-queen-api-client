import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { order } from '../models/orders'
@Injectable({
  providedIn: 'root'
})
export class BdOrdersService {
  url = 'http://localhost:8080/orders';
  public user = {
    email: '',
    roles: {
      admin: true,
    },
    id: 0
  }

  constructor(private http: HttpClient) { }
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
  getBdOrderService(): Observable<order[]> {
    return this.http.get<order[]>(this.url, this.httpOptions());
  }
  postBdOrderService(order: order): Observable<order> {
    return this.http.post<order>(this.url, order, this.httpOptions());
  }
  deleteBdOrderService(order: order): Observable<order> {
    const urlDelete = `${this.url}/${order.id}`;
    return this.http.delete<order>(urlDelete, this.httpOptions());
  }
  editBdOrderService(order: order): Observable<order>{
    const urlUpdateProduct = `${this.url}/${order.id}`;
    return this.http.put<order>(urlUpdateProduct, order, this.httpOptions());
  }
//  editBdUserService(id:number, workers: Users): Observable<Users>{
//   const urlUpdate = `${this.url}/${id}`;
//   console.log(urlUpdate);
//   return this.http.put<Users>(urlUpdate, workers);
// }
}

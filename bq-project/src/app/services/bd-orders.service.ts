import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { order } from '../models/orders'
@Injectable({
  providedIn: 'root'
})
export class BdOrdersService {
  url = 'http://localhost:5000/orders';

  constructor(private http: HttpClient) { }
  getBdOrderService(): Observable<order[]> {
    return this.http.get<order[]>(this.url);
  }
  postBdOrderService(order: order): Observable<order> {
    return this.http.post<order>(this.url, order);
  }
  deleteBdOrderService(order: order): Observable<order> {
    const urlDelete = `${this.url}/${order.id}`;
    return this.http.delete<order>(urlDelete);
  }
  editBdOrderService(order: order): Observable<order>{
    const urlUpdateProduct = `${this.url}/${order.id}`;
    return this.http.put<order>(urlUpdateProduct, order);
  }
//  editBdUserService(id:number, workers: Users): Observable<Users>{
//   const urlUpdate = `${this.url}/${id}`;
//   console.log(urlUpdate);
//   return this.http.put<Users>(urlUpdate, workers);
// }
}

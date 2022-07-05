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
}

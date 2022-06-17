import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BdProductsService {
  url = 'http://localhost:5000/products';

  constructor(private http: HttpClient) {}
  getBdProductsService(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url);
  }
  deleteProductsService(products:Products):Observable<Products> {
    const url = `${this.url}/${products.id}`;
    return this.http.delete<Products>(url);
  }
}

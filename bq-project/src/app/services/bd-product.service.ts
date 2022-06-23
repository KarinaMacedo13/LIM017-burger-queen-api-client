import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class BdProductService {
  urlProduct = 'http://localhost:5000/products';

  constructor(private http: HttpClient) {}
  
  // Servicio de borrado para productos
  getBdProductService(): Observable<Products[]> {
    return this.http.get<Products[]>(this.urlProduct);
  }
  deleteBdProductService(products: Products): Observable<Products>{
    const urlDeleteProduct = `${this.urlProduct}/${products.id}`;
    return this.http.delete<Products>(urlDeleteProduct);
  }
  postBdProductService(products: Products): Observable<Products>{
    return this.http.post<Products>(this.urlProduct, products);
  }
 updateBdProductService(products: Products): Observable<Products>{
   const urlUpdateProduct = `${this.urlProduct}/${products.id}`;
   return this.http.put<Products>(urlUpdateProduct, products);
 }
}

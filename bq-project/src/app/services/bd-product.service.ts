import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Products, productSinId } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class BdProductService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  @Output() disparadorSearchProducts: EventEmitter<any> = new EventEmitter();
  urlProduct = 'http://localhost:5000/products';

  constructor(private http: HttpClient) {}
  
  getBdProductService(): Observable<Products[]> {
    return this.http.get<Products[]>(this.urlProduct);
  }
  deleteBdProductService(products: Products): Observable<Products>{
    const urlDeleteProduct = `${this.urlProduct}/${products.id}`;
    return this.http.delete<Products>(urlDeleteProduct);
  }
  postBdProductService(products: productSinId): Observable<productSinId>{
    return this.http.post<productSinId>(this.urlProduct, products);
  }
 editBdProductService(id:number, products: productSinId): Observable<productSinId>{
   const urlUpdateProduct = `${this.urlProduct}/${id}`;
   return this.http.put<productSinId>(urlUpdateProduct, products);
 }
}

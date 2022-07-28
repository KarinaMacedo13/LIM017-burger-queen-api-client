import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Products, productSinId } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class BdProductService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  @Output() disparadorSearchProducts: EventEmitter<any> = new EventEmitter();
  @Output() disparadorID: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  urlProduct = 'https://project-api-bq.herokuapp.com/products/';
  urlOnly = 'https://project-api-bq.herokuapp.com/';

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
  getBdProductService(): Observable<Products[]> {
    return this.http.get<Products[]>(this.urlProduct, this.httpOptions());
  }
  deleteBdProductService(products: Products): Observable<Products> {
    const urlDeleteProduct = `${this.urlProduct}${products.id}`;
    return this.http.delete<Products>(urlDeleteProduct, this.httpOptions());
  }
  postBdProductService(products: productSinId): Observable<productSinId> {
    return this.http.post<productSinId>(
      this.urlProduct,
      products,
      this.httpOptions()
    );
  }
  editBdProductService(
    id: number,
    products: productSinId
  ): Observable<productSinId> {
    const urlUpdateProduct = `${this.urlProduct}${id}`;
    return this.http.patch<productSinId>(
      urlUpdateProduct,
      products,
      this.httpOptions()
    );
  }
}

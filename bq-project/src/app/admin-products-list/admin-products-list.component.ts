import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { BdProductService } from '../services/bd-product.service';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.scss'],
})
export class AdminProductsListComponent implements OnInit {
  listProducts: Products[] = [];
  Produc!: Products;
  valueSearch: string = '';
  constructor(private bdproductsService:  BdProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.obtainValueSearh();
  }
  getProducts(){
    this.bdproductsService. getBdProductService().subscribe(product => {
      (this.listProducts = product), console.log('esto devuelve getproduct', product);
    })
  }
  deleteProduct(product: Products) {
    this.bdproductsService.deleteBdProductService(product).subscribe(() => {
      this.listProducts = this.listProducts.filter(productUnDelete => productUnDelete.id !== product.id)
      console.log('El producto fue eliminado');
    })
  }
  updateProduct(product: Products) {
    this.Produc = product;
    console.log(this.Produc);
    this.bdproductsService.disparador.emit({
      dataProduct: this.Produc
    });
  }
   // Obteniendo los datos del filtrador general
 // mediante un disparadorSearch
 //valueSearch contiene el valor de la busqueda.
 obtainValueSearh() {
  this.bdproductsService.disparadorSearchProducts.subscribe(data => {
    this.valueSearch = data.valueSearch;
  });
  }
}

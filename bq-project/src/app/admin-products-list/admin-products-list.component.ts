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
  idProduc!: number;
  constructor(private bdproductsService:  BdProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.bdproductsService. getBdProductService().subscribe(product => {
      (this.listProducts = product), console.log(product);
    })
  }
  deleteProduct(product: Products) {
    this.bdproductsService.deleteBdProductService(product).subscribe(() => {
      this.listProducts = this.listProducts.filter(productUnDelete => productUnDelete.id !== product.id)
      console.log('El producto fue eliminado');
    })
  }
  updateProduct(product: Products) {
    this.idProduc = product.id;
    console.log(this.idProduc);
  }
}

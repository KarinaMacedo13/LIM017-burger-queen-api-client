/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Products } from '../../../models/products';
import { BdProductService } from '../../../services/bd-product.service';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.scss'],
})
export class AdminProductsListComponent implements OnInit {
  listProducts: Products[] = [];
  Produc!: Products;
  valueSearch: string = '';
  optionPCategory!: string;

  constructor(private bdproductsService:  BdProductService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getProducts();
    this.obtainValueSearh();
    this.updateDataComponent();
  }
  //Mostrar los elementos de la base de datos
  getProducts(){
    this.bdproductsService. getBdProductService().subscribe(product => {
      (this.listProducts = product);
    },error => {console.log(error)})
  }
  //Borrar productos
  deleteProduct(product: Products) {
    this.bdproductsService.deleteBdProductService(product).subscribe(() => {
      this.toastr.error('El producto fue eliminado con éxito', 'Producto Eliminado');
      this.listProducts = this.listProducts.filter(productUnDelete => productUnDelete.id !== product.id);
    },error => {console.log(error)})
  }
  //Actualiza el producto
  updateProduct(product: Products) {
    this.Produc = product;
    console.log(this.Produc);
    this.bdproductsService.disparador.emit({
      dataProduct: this.Produc
    });
  }
  // Obteniendo los datos del filtrador general mediante un disparadorSearch, valueSearch contiene el valor de la busqueda.
  obtainValueSearh() {
  this.bdproductsService.disparadorSearchProducts.subscribe(data => {
    this.valueSearch = data.valueSearch;
  });
  }
  // Obtiene la opción elegida
  optionClick(option:string){
    this.optionPCategory = option;
  }
  updateDataComponent() {
    this.bdproductsService.update.subscribe(data => {
      if(data.update===true){
        this.getProducts();
      };
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BdProductService } from '../../../services/bd-product.service';
import { Products } from '../../../models/products';
@Component({
  selector: 'app-home-menu-form',
  templateUrl: './home-menu-form.component.html',
  styleUrls: ['./home-menu-form.component.scss']
})
export class HomeMenuFormComponent implements OnInit {
  Products: Products[] = [];
  ordersForm: FormGroup;
  title = 'Agregar Nueva Orden';
  number: number = 0;
  constructor(private fb: FormBuilder, private bdproductsService:  BdProductService) { 
    this.ordersForm = this.fb.group({
      client: ['', Validators.required],
      // name: ['', Validators.required],
      // price: ['', Validators.required],
      // image: ['', Validators.required],
      // type: ['', Validators.required],
      // status: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.getProduct();
  }

  addOrders(){
    // const ORDERS: Orders[];
  }
  //Obtiene un array de valores únicos del HomeMenuListComponent para recorrerlo en el html del homeMenuFormComponent
  getProduct() {
    this.bdproductsService.disparador.subscribe(data => {
      console.log('Recibiendo dataProduct:', data);
      this.Products = data.dataProducts;
      console.log('Variable Product:', this.Products)
    });
  }
  // Contador de HTML, agrega una unidad por cada click
  addNumber() {
    this.number+=1;
  }
  // Contador de HTML, quita una unidad por cada click
  deleteNumber() {
    this.number-=1;
  }
  deleteProduct(idProduct: number) {
    console.log('Soy el id: ',idProduct)
    this.bdproductsService.disparadorID.emit({
      dataId: idProduct
    });
    this.Products = this.Products.filter((item) => item.id !== idProduct)
    console.log('Nuevo Array borrado: ',this.Products)
  }
}

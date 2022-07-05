import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BdProductService } from '../../../services/bd-product.service';
import { Products, ordersProduct } from '../../../models/products';
@Component({
  selector: 'app-home-menu-form',
  templateUrl: './home-menu-form.component.html',
  styleUrls: ['./home-menu-form.component.scss']
})
export class HomeMenuFormComponent implements OnInit {
  listProductsOrder!: ordersProduct;
  productNew: ordersProduct[] = [];
  Products: Products[] = [];
  ordersForm: FormGroup;
  number: number = 0;
  title = 'Agregar Nueva Orden';
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
      this.productNew = data.dataProduct;
      console.log('Recibo esto', this.productNew)
    });
  }
}

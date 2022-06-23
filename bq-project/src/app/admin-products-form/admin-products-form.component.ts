import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BdProductService } from '../services/bd-product.service';
import {  productSinId } from '../models/products';


@Component({
  selector: 'app-admin-products-form',
  templateUrl: './admin-products-form.component.html',
  styleUrls: ['./admin-products-form.component.scss'],
})
export class AdminProductsFormComponent implements OnInit {
  productForm: FormGroup;
  title = 'Agregar Producto';
  productID !:number;
  constructor(private fb: FormBuilder, private bdproductService:  BdProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      type: ['', Validators.required]
    })
  }
  
  ngOnInit(): void {
    this.editFormProduct();
    this.obtainIdProduct();
  }
obtainIdProduct() {
  this.bdproductService.disparador.subscribe(data=>{
    this.productID =data.dataProduct.id;
    return this.productID;
  })
}
  addProduct(){
    const PRODUCTS: productSinId = {
      name: this.productForm.get('name')?.value,
      price: this.productForm.get('price')?.value,
      image: this.productForm.get('image')?.value,
      type: this.productForm.get('type')?.value,
    };
    console.log(PRODUCTS);
if(this.productID!== undefined) {
  //editar Producto de
this.bdproductService.editBdProductService(this.productID, PRODUCTS).subscribe(data => {
  console.log('Editado con éxito');
})
} else{
  // Crear producto
  this.bdproductService.postBdProductService(PRODUCTS).subscribe(data => {
    console.log('Actualizado con éxito');
  })
}
  }

  editFormProduct() {
    this.bdproductService.disparador.subscribe(data => {
      console.log('Recibiendo dataProduct:', data);
      if(data.dataProduct.id !== null){
      this.title = 'Editar Producto';
       this.productForm.setValue({
    name: data.dataProduct.name,
    price: data.dataProduct.price,
    image: data.dataProduct.image,
    type: data.dataProduct.type,
  })
      }
    })
  }
  
}



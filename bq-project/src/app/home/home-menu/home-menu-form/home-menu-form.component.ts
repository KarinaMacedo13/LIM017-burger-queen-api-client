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
  deleteProduct(idProduct: number) {
    // console.log('Soy el id: ',idProduct)
    // this.bdproductsService.disparadorID.emit({
    //   dataId: idProduct
    // });
    this.productNew = this.productNew.filter((item) => item.product.id !== idProduct)
    console.log('Nuevo Array borrado: ',this.productNew)
  }
  getProduct() {
    this.bdproductsService.disparador.subscribe(data => {
      console.log('Recibiendo dataProduct:', data);
      this.Products = data.dataProducts;
      console.log('Variable Product:', this.Products)
      this.Products.forEach(x=>{
        this.listProductsOrder = {
            qty: 0,
            product: {
              id: x.id,
              name: x.name,
              price: x.price,
              image: x.image,
              type: x.type,
              dateEntry: x.dateEntry,
            }
          }
        })
        this.productNew.push(this.listProductsOrder);
      console.log('SOY EL NUEVO ARRAY',this.productNew);
    });
  }
  // Contador de HTML, agrega una unidad por cada click
  // addNumber(id: number) {

  //   // this.productNew.forEach(product=>product.qty = number+=1)
  //   // this.number+=1;
  // }
  // // Contador de HTML, quita una unidad por cada click
  // deleteNumber(id: number) {
  //   // this.number = number;
  //   // this.number+=1;
  //   // this.productNew.forEach(product=>product.qty = number-=1)
  // }
}

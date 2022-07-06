import { Component, OnInit } from '@angular/core';
import { Products, ordersProduct } from '../../../models/products';
import { BdProductService } from '../../../services/bd-product.service';

@Component({
  selector: 'app-home-menu-list',
  templateUrl: './home-menu-list.component.html',
  styleUrls: ['./home-menu-list.component.scss']
})
export class HomeMenuListComponent implements OnInit {
  searchArray: ordersProduct[] = [];
  listProductsOrder!: ordersProduct;
  productNew: ordersProduct[] = [];
  listProducts: Products[] = [];
  constructor(private bdproductsService:  BdProductService) { }

  ngOnInit(): void {
    this.shareProductPlus();
    this.shareProductDelete();
    // this.getProducts();
  }
  // getProducts(){
  //   this.bdproductsService. getBdProductService().subscribe(product => {
  //     (this.listProducts= product);
  //     console.log(this.listProducts)
  //     this.listProducts.forEach( x=>{
  //       this.productNew.push(this.listProductsOrder = {
  //           qty: 0,
  //           total: 0,
  //           product: {
  //             id: x.id,
  //             name: x.name,
  //             price: x.price,
  //             image: x.image,
  //             type: x.type,
  //             dateEntry: x.dateEntry,
  //           }
  //         })
  //       })
  //     this.bdproductsService.disparadorShare.emit({
  //       dataProduct: this.productNew,
  //     });
  //   },error => {console.log(error)})
  // }
  shareProductPlus() {
    this.bdproductsService.disparadorShare.subscribe(data => {
      console.log('Recibiendo dataProduct:', data);
      if(data.dataProduct.qty>0){
        this.shareProduct(data.dataProduct);
      }
    })
  }
  shareProductDelete() {
    this.bdproductsService.disparadorShare.subscribe(data => {
      console.log('Recibiendo dataProduct:', data);
      if(data.dataProduct.qty==0){
        this.shareDelete(data.dataProduct);
      } else {
        this.shareProduct(data.dataProduct);
      }
    })
  }

  shareProduct(product: ordersProduct) {
    this.searchArray.push(product);
    // let updatedOSArray = this.searchArray.map(p =>p.product.id === product.product.id? p.qty = product.qty : p);
    // this.searchArray.filter(item => item.product.id !== product.product.id)
    // console.log("Soy el array donde llegan los productos",updatedOSArray)
    // let mySet = [...new Set(this.searchArray)];
    // console.log("Compartiendo esto",mySet)
    this.bdproductsService.disparador.emit({
      dataProduct: this.searchArray
    });
  }
  shareDelete(product: ordersProduct){
    console.log("filtro");
    this.searchArray = this.searchArray.filter((item) => item.product.id !== product.product.id)
    console.log("Soy el array donde llegan los productos",this.searchArray)
    // let mySet = [...new Set(this.searchArray)];
    this.bdproductsService.disparador.emit({
      dataProduct: this.searchArray
    });
  }
}

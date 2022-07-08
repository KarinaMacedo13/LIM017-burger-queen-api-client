import { Component, OnInit } from '@angular/core';
import { Products, ordersProduct } from '../../../models/products';
import { BdProductService } from '../../../services/bd-product.service';

@Component({
  selector: 'app-home-menu-list',
  templateUrl: './home-menu-list.component.html',
  styleUrls: ['./home-menu-list.component.scss']
})
export class HomeMenuListComponent implements OnInit {

  listProductsOrder!: ordersProduct;
  productNew: ordersProduct[] = [];
  listProducts: Products[] = [];
  optionPCategory!: string;
  valueSearch: string = '';
  number: number = 0;
  searchArray: ordersProduct[] = [];

  constructor(private bdproductsService:  BdProductService) { }

  ngOnInit(): void {
    // Initialize the following methods
    this.getProducts();
    this.obtainValueSearh();
  }
  // Get products from the product database
  getProducts(){
    this.bdproductsService. getBdProductService().subscribe(product => {
      (this.listProducts= product),
      this.listProducts.forEach( x=>{
        this.productNew.push(
          this.listProductsOrder = {
            qty: 0,
            total: 0,
            product: {
              id: x.id,
              name: x.name,
              price: x.price,
              image: x.image,
              type: x.type,
              dateEntry: x.dateEntry,
            }
          })
        })
    },error => {console.log(error)})
  }
  // Receive the search value from the HomeComponent, ValueSearch is passed to the pipe in the HTML of the HomeMenuListComponent and perform the search on what you type
  obtainValueSearh() {
    this.bdproductsService.disparadorSearchProducts.subscribe(data => {
      this.valueSearch = data.valueSearch;
    });
  }
  // Gets the click of the HomeMenuListComponent HTML selector, to send the option to the pipe and perform the filter function according to the category
  optionClick(option:string){
    this.optionPCategory = option;
    console.log('Que es optionClick', this.optionPCategory);
  }
  // Depending on the quantity of each product, execute another method
  shareProductPlus(product: ordersProduct) {
    product.qty+=1;
    if(product.qty>0){
      this.shareProduct(product);
    }
  }
  // Depending on the amount, share the product to either increase or remove a product
  shareProductDelete(product: ordersProduct) {
    product.qty-=1;
    if(product.qty==0){
      this.shareDelete(product);
    } else {
      this.shareProduct(product);
    }
  }
  // Share the product in an array with unique elements
  shareProduct(product: ordersProduct) {
    this.searchArray.push(product);
    let mySet = [...new Set(this.searchArray)];
    this.bdproductsService.disparador.emit({
      dataProduct: mySet
    });
  }

  shareDelete(product: ordersProduct){
    this.searchArray = this.searchArray.filter((item) => item.product.id !== product.product.id) // Delete the id
    let mySet = [...new Set(this.searchArray)];
    // Share the array with the deleted item
    this.bdproductsService.disparador.emit({
      dataProduct: mySet
    });
  }
}

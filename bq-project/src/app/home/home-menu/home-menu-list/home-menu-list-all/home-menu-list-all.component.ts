import { Component, OnInit } from '@angular/core';
import { Products, ordersProduct } from '../../../../models/products';
import { BdProductService } from '../../../../services/bd-product.service';

@Component({
  selector: 'app-home-menu-list-all',
  templateUrl: './home-menu-list-all.component.html',
  styleUrls: ['./home-menu-list-all.component.scss']
})
export class HomeMenuListAllComponent implements OnInit {
  listProductsOrder!: ordersProduct;
  productNew: ordersProduct[] = [];
  listProducts: Products[] = [];
  valueSearch: string = '';

  constructor(private bdproductsService:  BdProductService) { }

  ngOnInit(): void {
    // Inicializa los siguientes métodos
    this.getProducts();
  }
    // Obtener productos de la BD de productos
    getProducts(){
      // this.bdproductsService.disparadorProduct.subscribe(data => {
      //   console.log("Soy la data recibida product all", data)
      //     this.productNew = data.dataProduct;
      //     console.log("Soy la data de product all", this.productNew )
      // })
      this.bdproductsService. getBdProductService().subscribe(product => {
        (this.listProducts= product), console.log('esto devuelve getproduct', product);
        console.log(this.listProducts)
        this.listProducts.forEach( x=>{
          this.productNew.push(this.listProductsOrder = {
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
    shareProductPlus(product: ordersProduct) {
      product.qty+=1;
      this.bdproductsService.disparadorShare.emit({
      dataProduct: product,
      });
    }
    shareProductDelete(product: ordersProduct) {
      product.qty-=1;
      this.bdproductsService.disparadorShare.emit({
        dataProduct: product,
      });
    }
}

import { Component, OnInit } from '@angular/core';
import { Products, ordersProduct } from '../../../../models/products';
import { BdProductService } from '../../../../services/bd-product.service';

@Component({
  selector: 'app-home-menu-list-desayuno',
  templateUrl: './home-menu-list-desayuno.component.html',
  styleUrls: ['./home-menu-list-desayuno.component.scss']
})
export class HomeMenuListDesayunoComponent implements OnInit {
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
      this.bdproductsService. getBdProductService().subscribe(product => {
        (this.listProducts= product.filter(typeProduct => typeProduct.type==="Desayuno")), console.log('esto devuelve getproduct', product);
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

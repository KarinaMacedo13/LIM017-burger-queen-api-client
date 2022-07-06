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
  valueId!: number;
  number: number = 0;
  searchArray: ordersProduct[] = [];
  // Products: Products[] = [];
  constructor(private bdproductsService:  BdProductService) { }

  ngOnInit(): void {
    // Inicializa los siguientes métodos
    this.getProducts();
    this.obtainValueSearh();
  }
  // Obtener productos de la BD de productos
  getProducts(){
    this.bdproductsService. getBdProductService().subscribe(product => {
      (this.listProducts= product), console.log('esto devuelve getproduct', product);
      console.log(this.listProducts)
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
        // console.log('SOY EL NUEVO ARRAY',this.productNew);
        // console.log('AYUDA',this.productNew.forEach(x=>console.log(x.product.type)));
    },error => {console.log(error)})
  }
  // Recibir el valor de búsqueda del componente HomeComponent, ValueSearch es pasado al pipe en el HTML de HomeMenuListComponent y realizar la búsqueda de lo que escribe
  obtainValueSearh() {
    this.bdproductsService.disparadorSearchProducts.subscribe(data => {
      this.valueSearch = data.valueSearch;
      // console.log(this.valueSearch);
    });
  }
  // Obtiene el click del selector del HTML de HomeMenuListComponent, para enviar la opción al pipe y realizar la función de filtrado según la categoria
  optionClick(option:string){
    this.optionPCategory = option;
    console.log('Que es optionClick', this.optionPCategory);
  }
  shareProductPlus(product: ordersProduct) {
    product.qty+=1;
    if(product.qty>0){
      this.shareProduct(product);
    }
  }
  shareProductDelete(product: ordersProduct) {
    product.qty-=1;
    if(product.qty==0){
      this.shareDelete(product);
    } else {
      this.shareProduct(product);
    }
  }
  shareProduct(product: ordersProduct) {
    this.searchArray.push(product);
    console.log(this.searchArray)
    let mySet = [...new Set(this.searchArray)];
    console.log("Compartiendo esto",mySet)
    this.bdproductsService.disparador.emit({
      dataProduct: mySet
    });
  }
  shareDelete(product: ordersProduct){
    console.log("filtro");
    this.searchArray = this.searchArray.filter((item) => item.product.id !== product.product.id)
    console.log(this.searchArray)
    let mySet = [...new Set(this.searchArray)];
    this.bdproductsService.disparador.emit({
      dataProduct: mySet
    });
  }
}

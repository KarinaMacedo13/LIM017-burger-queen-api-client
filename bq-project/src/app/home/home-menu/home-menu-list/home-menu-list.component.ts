import { Component, OnInit } from '@angular/core';
import { Products, ordersProduct } from '../../../models/products';
import { BdProductService } from '../../../services/bd-product.service';

@Component({
  selector: 'app-home-menu-list',
  templateUrl: './home-menu-list.component.html',
  styleUrls: ['./home-menu-list.component.scss']
})
export class HomeMenuListComponent implements OnInit {
  listProductsOrder: ordersProduct[] = [];
  listProducts: Products[] = [];
  optionPCategory!: string;
  valueSearch: string = '';
  valueId!: number;
  number: number = 0;
  Products: Products[] = [];
  constructor(private bdproductsService:  BdProductService) { }

  ngOnInit(): void {
    // Inicializa los siguientes métodos
    this.getProducts();
    this.obtainValueSearh();
    this.deleteProduct();
  }
  // Obtener productos de la BD de productos
  getProducts(){
    this.bdproductsService. getBdProductService().subscribe(product => {
      (this.listProducts = product), console.log('esto devuelve getproduct', product);
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
  deleteProduct() {
    // this.bdproductsService.disparadorID.subscribe(data => {
    //   this.valueId = data.dataId;
    //   console.log('Reciben mi ID:', this.valueId);
    //   this.Products = this.Products.filter((item) => item.id !== this.valueId)
    //   console.log('Nuevo Array borrado: ',this.Products)
    // });
  }
  shareProduct(product: Products) {
    // this.Products = this.Product;
    this.Products.push(product);
    let mySet = [...new Set(this.Products)];
    console.log(this.Products);
    console.log(mySet);
    this.bdproductsService.disparador.emit({
      dataProducts: mySet
    });
  }
}

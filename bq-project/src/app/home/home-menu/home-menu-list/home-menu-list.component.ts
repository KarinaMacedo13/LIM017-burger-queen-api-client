import { Component, OnInit } from '@angular/core';
import { Products } from '../../../models/products';
import { BdProductService } from '../../../services/bd-product.service';

@Component({
  selector: 'app-home-menu-list',
  templateUrl: './home-menu-list.component.html',
  styleUrls: ['./home-menu-list.component.scss']
})
export class HomeMenuListComponent implements OnInit {
  listProducts: Products[] = [];
  optionPCategory!: string;
  valueSearch: string = '';
  constructor(private bdproductsService:  BdProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.obtainValueSearh();
  }
  getProducts(){
    this.bdproductsService. getBdProductService().subscribe(product => {
      (this.listProducts = product), console.log('esto devuelve getproduct', product);
    },error => {console.log(error)})
  }
  obtainValueSearh() {
    this.bdproductsService.disparadorSearchProducts.subscribe(data => {
      this.valueSearch = data.valueSearch;
      console.log(this.valueSearch);
    });
    }
  optionClick(option:string){
    this.optionPCategory = option;
    console.log('Que es optionClick', this.optionPCategory);
  }
}

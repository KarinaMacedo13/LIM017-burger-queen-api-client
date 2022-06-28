import { Component, OnInit } from '@angular/core';
import { BdProductService } from '../services/bd-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchValue: string = '';
  constructor(private bdproductsService:  BdProductService) {}

  ngOnInit(): void {
  }
  searchInput(search: string) {
    this.searchValue = search;
    // Enviando el valor de la busqueda a product-list en la variable ValueSearch
    this.bdproductsService.disparadorSearchProducts.emit({
      valueSearch: this.searchValue,
    });
  }
}

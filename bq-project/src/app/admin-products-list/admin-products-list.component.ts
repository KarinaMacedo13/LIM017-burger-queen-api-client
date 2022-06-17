import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { Products } from '../models/products';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.scss'],
})
export class AdminProductsListComponent implements OnInit {
  @Input() products!: Products;
  @Input() onDeleteProducts: EventEmitter<Products> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onDelete(product: Products) {
    this.onDeleteProducts.emit(product);
  }
}

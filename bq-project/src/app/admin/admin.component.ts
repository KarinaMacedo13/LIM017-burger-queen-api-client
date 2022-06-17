import { Component, OnInit } from '@angular/core';
import { BdUserService } from '../services/bd-user.service';
import { BdProductsService } from '../services/bd-products.service';
import { Workers } from '../models/workers';
import { Products } from '../models/products';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  listWorkers: Workers[] = [];
  listProducts: Products[] = [];

  constructor(
    private bduserService: BdUserService,
    private bdproductsService: BdProductsService
  ) {}
  ngOnInit(): void {
    this.bduserService.getBdUserService().subscribe(worker => {
      (this.listWorkers = worker), console.log(this.listWorkers);
    });
    this.bdproductsService.getBdProductsService().subscribe(product => {
      (this.listProducts = product), console.log(this.listProducts);
    });
  }
  deleteProducts(products:Products) {
    this.bdproductsService
    .deleteProductsService(products)
    .subscribe(
      ()=>(this.listProducts = this.listProducts.filter(t => t.id !== products.id)))
  }

  // bdService() {
  //   this._bduserService.getBdUserService().subscribe(user =>
  //     {console.log(user);
  //     },
  //     error => {
  //       console.log(error);
  //   })
  // }
}

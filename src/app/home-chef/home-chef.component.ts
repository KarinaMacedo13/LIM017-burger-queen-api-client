/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/models/orders';
import { BdOrdersService } from 'src/app/services/bd-orders.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-chef',
  templateUrl: './home-chef.component.html',
  styleUrls: ['./home-chef.component.scss'],
})
export class HomeChefComponent implements OnInit {
  listOrders: order[] = [];
  optionStatus!: string;
  isExpanded: boolean = false;
  dataChange: any = new Date();
  email: any;
  description: any;

  constructor(
    private bdordersService: BdOrdersService,
    private toastr: ToastrService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getOrders();
    this.getUser();
  }
  getUser() {
    this.email = localStorage.getItem('email');
    this.description = localStorage.getItem('description');
    if (this.description === 'chef') {
      this.description = 'Cocinero';
    }
    console.log('Datos de la persona', this.description, this.email);
  }
  getOrders() {
    this.bdordersService.getBdOrderService().subscribe(order => {
      (this.listOrders = order), console.log('esto devuelve getproduct', order);
    });
  }
  optionClick(option: string) {
    this.optionStatus = option;
    console.log('Que es optionClick', this.optionStatus);
  }
  updateOrder(order: order) {
    console.log(order.status);
    console.log('Actualizo a delivery');
    const ORDERS: order = {
      id: order.id,
      status: 'preparado',
      client: order.client,
      products: order.products,
      dataEntry: order.dataEntry,
      dataPrepare: this.dataChange,
      total: order.total,
      time: Math.round(((<any>new Date(this.dataChange).getTime()-<any>new Date(order.dataEntry).getTime()) /(1000*60))*100)/100};
    this.bdordersService.editBdOrderService(ORDERS).subscribe(data => {
      this.toastr.success(
        'La orden fue actualizada con éxito',
        'Orden Actualizada'
      );
      this.getOrders();
      console.log('Editado con éxito');
    });
  }

  logOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('description');
    this.cookieService.delete('roles_access');
    this.router.navigate(['/login']);
    this.toastr.success('Se cerro sesión con éxito', 'Cerrar Sesión');
  }
}

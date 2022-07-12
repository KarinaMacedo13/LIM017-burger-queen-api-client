import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/models/orders';
import { BdOrdersService } from 'src/app/services/bd-orders.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-pedidos-list',
  templateUrl: './home-pedidos-list.component.html',
  styleUrls: ['./home-pedidos-list.component.scss']
})
export class HomePedidosListComponent implements OnInit {
  listOrders: order[] = [];
  dataChange: string = new Date().toLocaleString();
  optionStatus: string = '';

  constructor( private bdordersService:  BdOrdersService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getOrders();
  }
  // Get the orders and order
  getOrders(){
    this.bdordersService.getBdOrderService().subscribe(order => {
      this.listOrders = order;
      //Sort by date from newest to oldest
      this.listOrders.sort((a, b) => <any> new Date(b.dataEntry) - <any> new Date(a.dataEntry));
    }
    )
  }
  //Delete orders
  deleteOrder(order: order) {
    this.bdordersService.deleteBdOrderService(order).subscribe(() => {
      this.toastr.error('El producto fue eliminado con éxito', 'Producto Eliminado');
      this.listOrders = this.listOrders.filter(orderdelete => orderdelete.id !== order.id);
    },error => {console.log(error)})
  }
  //Update the delivery status of a delivered
  updateOrder(order: order) {
    const ORDERS: order = {
      id: order.id,
      status: "delivered",
      client: order.client,
      products: order.products,
      dataEntry: order.dataEntry,
      total: order.total,
      dateProcessed: this.dataChange,
    }
    this.bdordersService.editBdOrderService(ORDERS).subscribe(data => {
      this.toastr.success('El producto fue actualizado con éxito', 'Producto Actualizado');
      this.getOrders();
    })
  }
  optionClick(option:string){
    this.optionStatus = option;
    console.log('Que es optionClick', this.optionStatus);
  }
}

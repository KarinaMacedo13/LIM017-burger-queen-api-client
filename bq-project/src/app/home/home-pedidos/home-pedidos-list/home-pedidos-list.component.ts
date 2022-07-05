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

  constructor( private bdordersService:  BdOrdersService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders(){
    this.bdordersService.getBdOrderService().subscribe(order => {
      (this.listOrders = order), console.log('esto devuelve getproduct', order);
      console.log("Soy la lista de ordenes",this.listOrders);
    }
    )
  }
  deleteOrder(order: order) {
    this.bdordersService.deleteBdOrderService(order).subscribe(() => {
      this.toastr.error('El producto fue eliminado con éxito', 'Producto Eliminado');
      this.listOrders = this.listOrders.filter(orderdelete => orderdelete.id !== order.id)
      console.log('El producto fue eliminado');
    },error => {console.log(error)})
  }
  updateOrder(order: order) {
  }
}

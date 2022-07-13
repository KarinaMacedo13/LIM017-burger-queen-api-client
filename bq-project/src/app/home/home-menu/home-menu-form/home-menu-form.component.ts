import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BdProductService } from '../../../services/bd-product.service';
import { Products, ordersProduct } from '../../../models/products';
import { order } from '../../../models/orders';
import { BdOrdersService } from 'src/app/services/bd-orders.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home-menu-form',
  templateUrl: './home-menu-form.component.html',
  styleUrls: ['./home-menu-form.component.scss']
})
export class HomeMenuFormComponent implements OnInit {

  productNew: ordersProduct[] = [];
  ordersForm: FormGroup;
  totalOrder: number = 0;
  title = 'Agregar Orden';
  dataOrder: string = new Date().toLocaleString();

  constructor(private fb: FormBuilder, private bdproductsService:  BdProductService, private bdordersService:  BdOrdersService, private toastr: ToastrService) {
   
    this.ordersForm = this.fb.group({
      client: ['', Validators.required],
      dataEntry: [ this.dataOrder ],
    })
  }
  //Keeps this method initialized, keeping the menu items in view
  ngOnInit(): void {
    this.getProduct();
  }
  //Method that allows me to obtain the value of each input of the form and post it in the database
  addOrders(){
    const ORDERS: order = {
      client: this.ordersForm.get('client')?.value,
      products: this.productNew,
      status: "pendiente",
      dataEntry: this.ordersForm.get('dataEntry')?.value,
      total: this.totalOrder,
    }
    this.bdordersService.postBdOrderService(ORDERS).subscribe( () => {
      this.toastr.success('El usuario fue agregado con éxito', 'Usuario Agregado');
    },error => {console.log(error)}
    )
    window.location.reload();
  }
  //Gets an array of unique values ​​from the HomeMenuListComponent to loop through in the html of the homeMenuFormComponent
  getProduct() {
    this.bdproductsService.disparador.subscribe(data => {
      this.productNew = data.dataProduct;
      this.productNew.map((product => product.total=product.qty*product.product.price));
      this.totalOrder = this.productNew.reduce((acumulador, actual) => acumulador + actual.total, 0);
    });
  }
}
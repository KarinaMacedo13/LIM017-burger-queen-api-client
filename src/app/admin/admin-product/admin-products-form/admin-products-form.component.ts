import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BdProductService } from '../../../services/bd-product.service';
import { productSinId } from '../../../models/products';
import { ToastrService } from 'ngx-toastr';
import { ResourceLoader } from '@angular/compiler';
@Component({
  selector: 'app-admin-products-form',
  templateUrl: './admin-products-form.component.html',
  styleUrls: ['./admin-products-form.component.scss'],
})
export class AdminProductsFormComponent implements OnInit {
  productForm: FormGroup;
  title = 'Agregar Producto';
  productID!: number;
  dataOrder: any = new Date();

  constructor(
    private fb: FormBuilder,
    private bdproductService: BdProductService,
    private toastr: ToastrService,
    private bdproductsService: BdProductService
  ) {
    // Obtiene los valores del formulario ProductForm
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      type: ['', Validators.required],
      dateEntry: [this.dataOrder],
    });
  }

  ngOnInit(): void {
    this.editFormProduct();
    this.obtainIdProduct();
  }
  //Obtiene el id del disparador de admin productlist
  obtainIdProduct() {
    this.bdproductService.disparador.subscribe(data => {
      return (this.productID = data.dataProduct.id);
    });
  }
  //Agrega o edita productos
  addProduct() {
    const PRODUCTS: productSinId = {
      name: this.productForm.get('name')?.value,
      price: this.productForm.get('price')?.value,
      image: this.productForm.get('image')?.value,
      type: this.productForm.get('type')?.value,
      dateEntry: this.productForm.get('dateEntry')?.value,
    };
    if (this.productID !== undefined) {
      //editar Producto de
      this.bdproductService
        .editBdProductService(this.productID, PRODUCTS)
        .subscribe(
          data => {
            this.toastr.success(
              'El producto fue actualizado con éxito',
              'Producto Actualizado'
            );
            this.productForm.reset();
            this.bdproductsService.update.emit({
              update: true,
            });
          },
          error => {
            console.log(error);
          }
        );
    } else {
      // Crear producto, emitir mensaje
      this.bdproductService.postBdProductService(PRODUCTS).subscribe(
        data => {
          this.toastr.success(
            'El producto fue agregado con éxito',
            'Producto Actualizado'
          );
          this.productForm.reset();
          this.bdproductsService.update.emit({
            update: true,
          });
        },
        error => {
          console.log(error);
        }
      );
    }
    // window.location.reload();
  }
  // Obtiene los valores del servidor los muestra en el formulario y permite su reasignación
  editFormProduct() {
    this.bdproductService.disparador.subscribe(data => {
      //datos obtenidos por el disparador desde product-list
      if (data.dataProduct.id !== null) {
        this.title = 'Editar Producto';
        this.productForm.setValue({
          // Reasignación de valores
          name: data.dataProduct.name,
          price: data.dataProduct.price,
          image: data.dataProduct.image,
          type: data.dataProduct.type,
          dateEntry: this.dataOrder,
        });
      }
    });
  }
}

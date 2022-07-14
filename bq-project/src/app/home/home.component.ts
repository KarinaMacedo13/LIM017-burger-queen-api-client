import { Component, OnInit } from '@angular/core';
import { BdProductService } from '../services/bd-product.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  searchValue: string = '';
  isExpanded: boolean = false;
  email: any;
  description:  any;

  constructor(private bdproductsService:  BdProductService,private toastr: ToastrService,private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.email = localStorage.getItem('email');
    this.description = localStorage.getItem('description');
    if(this.description==='weiter') {
      this.description = "Mozo"
    }
    console.log('Datos de la persona', this.description,this.email)
  }
  searchInput(search: string) {
    this.searchValue = search;
    // Enviando el valor de la busqueda a product-list en la variable ValueSearch
    this.bdproductsService.disparadorSearchProducts.emit({
      valueSearch: this.searchValue,
    });
  }
  logOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    this.cookieService.delete('roles_access');
    this.router.navigate(['/login']);
    this.toastr.success('Se cerro sesión con éxito', 'Cerrar Sesión');
  }
}

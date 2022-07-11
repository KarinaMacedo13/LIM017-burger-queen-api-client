import { Component, OnInit } from '@angular/core';
import { BdProductService } from '../services/bd-product.service';
import { BdUserService } from '../services/bd-user.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  searchValue: string = '';
  constructor(private bduserService: BdUserService, private bdproductsService:  BdProductService, private toastr: ToastrService,private cookieService: CookieService, private router: Router) {}
  ngOnInit(): void {
  }
  searchInput(search: string) {
    // definición de la variable search
    this.searchValue = search;
   //Enviando el valor de la busqueda a user-list en la variable ValueSearch
    this.bduserService.disparadorSearch.emit({
      valueSearch: this.searchValue,
    });
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

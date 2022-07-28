import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationEnd, Router, RouterStateSnapshot, ActivatedRoute, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class VigilantGuard implements CanActivate {
  state: boolean = false;

  constructor(private cookieService: CookieService, private router: Router, private toastr: ToastrService) {
  }

  redirect(flag: boolean): any {
    if(!flag) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('id');
      localStorage.removeItem('email');
      localStorage.removeItem('description');
      this.cookieService.delete('roles_access');
      this.router.navigate(['/login']);
      this.toastr.error('No cuentas con acceso a está ruta','Acceso Denegado');
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie = this.cookieService.get('roles_access');
      console.log(cookie);
      console.log(state.url)
      if((state.url==='/admin'||state.url==='/admin/user'||state.url==='/admin/products') && cookie ==='admin') {
        return this.state = true;
      }
      if ((state.url==='/home'||state.url==='/home/menu'||state.url==='/home/orders') && cookie ==='weiter') {
        return this.state = true;
      }
      if (state.url==='/chef' && cookie ==='chef') {
        return this.state = true;
      }
      this.redirect(this.state);
      return this.state = false;
  }
}

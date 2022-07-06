import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUserFormComponent } from './admin/admin-user/admin-user-form/admin-user-form.component';
import { AdminUserListComponent } from './admin/admin-user/admin-user-list/admin-user-list.component';
import { AdminProductsFormComponent } from './admin/admin-product/admin-products-form/admin-products-form.component';
import { AdminProductsListComponent } from './admin/admin-product/admin-products-list/admin-products-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FiltroPPipe } from './pipes/filtro-p.pipe';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { HomeMenuComponent } from './home/home-menu/home-menu.component';
import { HomePedidosComponent } from './home/home-pedidos/home-pedidos.component';
import { HomeMenuListComponent } from './home/home-menu/home-menu-list/home-menu-list.component';
import { HomeMenuFormComponent } from './home/home-menu/home-menu-form/home-menu-form.component';
import { HomePedidosListComponent } from './home/home-pedidos/home-pedidos-list/home-pedidos-list.component';
import { HomeMenuListDesayunoComponent } from './home/home-menu/home-menu-list/home-menu-list-desayuno/home-menu-list-desayuno.component';
import { HomeMenuListAlmuerzoComponent } from './home/home-menu/home-menu-list/home-menu-list-almuerzo/home-menu-list-almuerzo.component';
import { HomeMenuListAllComponent } from './home/home-menu/home-menu-list/home-menu-list-all/home-menu-list-all.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, AdminComponent, AdminUserFormComponent, AdminUserListComponent, AdminProductsFormComponent, AdminProductsListComponent, FilterPipe, FiltroPPipe, AdminUserComponent, AdminProductComponent, HomeMenuComponent, HomePedidosComponent, HomeMenuListComponent, HomeMenuFormComponent, HomePedidosListComponent, HomeMenuListDesayunoComponent, HomeMenuListAlmuerzoComponent, HomeMenuListAllComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
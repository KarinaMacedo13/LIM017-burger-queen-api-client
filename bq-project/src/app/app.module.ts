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


@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, AdminComponent, AdminUserFormComponent, AdminUserListComponent, AdminProductsFormComponent, AdminProductsListComponent, FilterPipe, FiltroPPipe, AdminUserComponent, AdminProductComponent],
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
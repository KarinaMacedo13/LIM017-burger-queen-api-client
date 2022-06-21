import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUserFormComponent } from './admin-user-form/admin-user-form.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminProductsFormComponent } from './admin-products-form/admin-products-form.component';
import { AdminProductsListComponent } from './admin-products-list/admin-products-list.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, AdminComponent, AdminUserFormComponent, AdminUserListComponent, AdminProductsFormComponent, AdminProductsListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
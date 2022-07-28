import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { HomeMenuComponent } from './home/home-menu/home-menu.component';
import { HomePedidosComponent } from './home/home-pedidos/home-pedidos.component';
import { HomeChefComponent } from './home-chef/home-chef.component';
import { VigilantGuard } from './guards/vigilant.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [VigilantGuard],
  children: [
    {path: 'orders', component: HomePedidosComponent},
    {path: 'menu', component: HomeMenuComponent},
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [VigilantGuard],
  children: [
    {path: 'user', component: AdminUserComponent },
    {path: 'products', component: AdminProductComponent },
  ] },
  { path: 'chef', component: HomeChefComponent, canActivate: [VigilantGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

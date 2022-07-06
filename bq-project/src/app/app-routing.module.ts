import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { HomeMenuComponent } from './home/home-menu/home-menu.component';
import { HomePedidosComponent } from './home/home-pedidos/home-pedidos.component';
import { HomeMenuListDesayunoComponent } from './home/home-menu/home-menu-list/home-menu-list-desayuno/home-menu-list-desayuno.component';
import { HomeMenuListAlmuerzoComponent } from './home/home-menu/home-menu-list/home-menu-list-almuerzo/home-menu-list-almuerzo.component';
import { HomeMenuListAllComponent } from './home/home-menu/home-menu-list/home-menu-list-all/home-menu-list-all.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
  children: [
    {path: 'orders', component: HomePedidosComponent},
    {path: 'menu', component: HomeMenuComponent,
  children: [
    {path:"desayuno", component: HomeMenuListDesayunoComponent},
    {path:"almuerzoycena", component: HomeMenuListAlmuerzoComponent},
    {path:"all", component: HomeMenuListAllComponent},
  ]},
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent ,
  children: [
    {path: 'user', component: AdminUserComponent },
    {path: 'products', component: AdminProductComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

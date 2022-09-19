import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { HomeComponent } from './components/home/home.component';
import { HomeAdminComponent } from './components/home/home_admin.component';
import { InsertProductComponent } from './components/insert-product/insert-product.component';
import { LoginComponent } from './components/login/login.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { RemoveOrderDetailComponent } from './components/remove-order-detail/remove-order-detail.component';
import { RemoveProductComponent } from './components/remove-product/remove-product.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '***', pathMatch: 'full', redirectTo: '/' },
  // Trong trường hợp nếu các bạn muốn khi người dùng 
  // request tới một URL không tồn tại trong ứng dụng Angular của các bạn
  { path: 'product', component: ProductComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order-detail/:id', component: OrderDetailComponent },
  { path: 'insert-product', component: InsertProductComponent },
  { path: 'detail-product/:id', component: DetailProductComponent },
  { path: 'remove-product/:id', component: RemoveProductComponent },
  { path: 'remove-order/:id', component: RemoveOrderDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-admin', component: HomeAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

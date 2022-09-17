import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'order', component: OrderComponent },
  { path: 'insert-product', component: InsertProductComponent },
  { path: 'detail-product/:name', component: DetailProductComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

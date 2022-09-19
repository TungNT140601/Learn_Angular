import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ProductDescriptionPipe } from './_pipe/product-description.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    ProductDescriptionPipe,
    InsertProductComponent,
    OrderDetailComponent,
    DetailProductComponent,
    RemoveProductComponent,
    RemoveOrderDetailComponent,
    LoginComponent,
    HomeComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

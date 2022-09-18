import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDescriptionPipe } from './product-description.pipe';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    ProductDescriptionPipe,
    InsertProductComponent,
    OrderDetailComponent,
    DetailProductComponent
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

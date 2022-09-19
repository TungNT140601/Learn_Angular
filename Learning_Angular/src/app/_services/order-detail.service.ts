import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../products';
import { Order_detail } from '../_models/order-details';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  private product: any;
  constructor() { }
  getProductById(id: number): Observable<Product> {
    const product = Products.find(p => p.id === id)!;
    return of(product);
  }
  checkProductInOrder(id: number): Observable<Product> {
    const product = Order_detail.find(p => p.id === id)!;
    return of(product);
  }
  buyProduct(id: number): void {
    if (this.checkProductInOrder(id)!) {
      this.product = this.checkProductInOrder(id);
    } else {
      this.product = this.checkProductInOrder(id);
    }
    Order_detail.push(this.product);
  }
  removeOrder(id: number): void {
    const index = Order_detail.findIndex(p => p.id === id);
    Order_detail.splice(index,1);
  }
}

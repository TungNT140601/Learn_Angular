import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order_detail } from './order.detail';
import { Product } from './product';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor() { }
  getProductById(id: number): Product {
    const product = Products.find(p => p.id === id)!;
    return product;
  }
}

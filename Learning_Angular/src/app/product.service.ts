import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return Products;
  }
  getProductById(id: number): Observable<Product> {
    const product = Products.find(p => p.id === id)!;
    return of(product);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../products';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return Products;
  }
  getProductById(id: number): Product {
    const product = Products.find(p => p.id === id)!;
    return product;
  }
  removeProduct(id: number):void{
    const pro = this.getProductById(id);
    const index = Products.indexOf(pro);
    Products.splice(index,1);
  }
}

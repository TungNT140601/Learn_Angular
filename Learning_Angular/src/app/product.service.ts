import { Injectable } from '@angular/core';
import { Product } from './product';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts():Product[]{
    return Products;
  }
  getProductByName(nameIn:string):Product{
    const pro:Product = {
      name:'',
      price:0,
      quantity:0
    };
    for(let product of Products){
      if(product.name === nameIn){
        product = pro;
      }
    }
    return pro;
  }
}

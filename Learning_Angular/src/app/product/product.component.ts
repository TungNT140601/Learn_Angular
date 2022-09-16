import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // public name = 'Product 1';
  // public price = 20000;
  // public products = ['Product1', 'Product2', 'Product3','Product4','Product5','Product6',];
  public products: Product[] = [
    { name: 'Product1', price: 20000, quantity: 0 },
    { name: 'Product2', price: 20000, quantity: 20 },
    { name: 'Product3', price: 20000, quantity: 20 },
    { name: 'Product4', price: 20000, quantity: 20 },
    { name: 'Product5', price: 20000, quantity: 20 }
  ];
  constructor() { }

  public ngOnInit(): void {
    // console.log('product = ' + this.product.findIndex(x => x == 'Product2'));
  }
  // public resetName(): void {
  //   console.log("resetName func is running");
  //   this.name = '';
  // }
}

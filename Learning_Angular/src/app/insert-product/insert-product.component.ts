import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Products } from '../products';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {
  public product: Product = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0
  };
  constructor() { }

  ngOnInit(): void {
  }
  product_Ins(): void {
    Products.push(this.product);
  }
}

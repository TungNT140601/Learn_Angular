import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // public name = 'Product 1';
  // public price = 20000;
  public products = ['Product1', 'Product2', 'Product3','Product4','Product5','Product6',];
  constructor() { }

  public ngOnInit(): void {
    // console.log('product = ' + this.product.findIndex(x => x == 'Product2'));
  }
  // public resetName(): void {
  //   console.log("resetName func is running");
  //   this.name = '';
  // }
}

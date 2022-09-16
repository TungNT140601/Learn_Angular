import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public name = 'Product 1';
  public price = 20000;
  constructor() { }

  ngOnInit(): void {
  }
  public resetName(): void {
    console.log("resetName func is running");
    this.name = '';
  }
}

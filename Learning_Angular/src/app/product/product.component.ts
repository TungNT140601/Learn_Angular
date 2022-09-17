import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Products } from '../products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // public name = 'Product 1';
  // public price = 20000;
  // public products = ['Product1', 'Product2', 'Product3','Product4','Product5','Product6',];
  public products : any;
  public lifeCyle:string = "";
  public eventV:string = "Event 1";
  public searchS:string = '';
  public clickS:string = '';
  constructor(private productService: ProductService) { }

  public ngOnInit(): void {
    // console.log('product = ' + this.product.findIndex(x => x == 'Product2'));
    this.lifeCyle+='ngOnInit() ';
    this.products = this.productService.getProducts();
  }
  // public resetName(): void {
  //   console.log("resetName func is running");
  //   this.name = '';
  // }
  public eventIn():void{
    this.eventV = "Event In";
  }
  public eventOut():void{
    this.eventV = "Event Out";
  }
  public eventDblick():void{
    this.eventV = "Event Double Click";
  }
  public eventCopy():void{
    this.eventV = "Event Copy";
  }
  public tableEnter():void{
    this.eventV = "Enter Table";
  }
  public tableLeave(): void{
    this.eventV = "Leave Table";
  }
  public btnClick():void{
    this.clickS+='Ok ';
  }
  
}

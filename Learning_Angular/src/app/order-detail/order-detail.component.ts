import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailService } from '../order-detail.service';
import { Order_detail } from '../order.detail';
import { Product } from '../product';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  public orders = Order_detail;
  constructor(
    private route:ActivatedRoute,
    private orderDetailService:OrderDetailService
  ) { }

  ngOnInit(): void {
    console.log('Hello console log in onInit');

  }
  buyProduct():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    Order_detail.push(this.orderDetailService.getProductById(id));
    console.log('Hello console log in buyProduct');
    for(let product in this.orders){
      console.log(product);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order_detail } from 'src/app/_models/order-details';
import { OrderDetailService } from 'src/app/_services/order-detail.service';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  public orders = Order_detail;
  constructor(
    private route: ActivatedRoute,
    private orderDetailService: OrderDetailService
  ) { }

  ngOnInit(): void {
    this.buyProduct();
    for(let order of this.orders){
      console.log('ID :' + order.id);
    }
  }
  buyProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderDetailService.buyProduct(id);
    console.log('Add Product');
  }
}

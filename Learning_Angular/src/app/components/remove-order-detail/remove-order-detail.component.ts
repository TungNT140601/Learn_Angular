import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailService } from 'src/app/_services/order-detail.service';

@Component({
  selector: 'app-remove-order-detail',
  templateUrl: './remove-order-detail.component.html',
  styleUrls: ['./remove-order-detail.component.css']
})
export class RemoveOrderDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private orderDetailService: OrderDetailService
  ) { }

  ngOnInit(): void {
    this.removeProduct();
  }
  removeProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderDetailService.removeOrder(id);
    this.location.back();
  }
}

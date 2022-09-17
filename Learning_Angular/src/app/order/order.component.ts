import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order:Product[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  

}

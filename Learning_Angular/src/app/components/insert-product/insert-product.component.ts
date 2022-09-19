import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationBehaviorOptions, Router } from '@angular/router';
import { Products } from 'src/app/products';
import { Product } from 'src/app/_models/product';


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
  public msg: string = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  product_Ins(): void {
    if (this.product.id == 0 || this.product.name == '' || this.product.price == 0 || this.product.quantity == 0) {
      this.msg = 'Error! Please input again';
      this.router.navigate(['/insert-product']);
    } else {
      Products.push(this.product);
      this.router.navigate(['/product']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  public product: any;
  // product: Product = {
  //   id: 0,
  //   name: '',
  //   price: 0,
  //   quantity: 0
  // };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.product = this.productService.getProductById(id);
    this.productService.getProductById(id)
      .subscribe((product: Product) => this.product = product);
  }
}

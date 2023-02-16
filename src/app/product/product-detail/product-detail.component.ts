import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";
import {ProductApiService} from "../product-api.service";
import {ProductModel} from "../models/ProductModel";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  productId : string;
  product: ProductModel | null;


  constructor(private route: ActivatedRoute, private productApiService : ProductApiService) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((paramMap) =>{
      return this.productApiService.getProduct(paramMap.get('id')!);
    })).subscribe((product) =>{
      this.product = product!;
    })
  }

}

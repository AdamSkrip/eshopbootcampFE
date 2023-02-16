import {Component, OnInit} from '@angular/core';
import {ProductApiService} from "../product-api.service";
import {Router} from "@angular/router";
import {CatalogModel} from "../models/CatalogModel";
import {ProductModel} from "../models/ProductModel";
import {defaults} from "autoprefixer";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  selectedOption: string = 'default';
  catalogs: CatalogModel[];
  products: ProductModel[];

  constructor(private productApiService: ProductApiService, private router: Router) {
  }

  ngOnInit() {
      this.getAvailableCatalogs();
  }

  getAvailableCatalogs() {
    this.productApiService.getCatalogs().subscribe(catalogs => {
      this.catalogs = catalogs;
    })
  }

  catalogChange(id : string){
      this.productApiService.getCatalog(id).subscribe((catalog:CatalogModel) => {
      this.products = catalog.products!;
      console.log(this.products)
    })
  }

  getCatalogProducts() {
    this.productApiService.getCatalog(this.selectedOption).subscribe(products => {
      // this.products = products;
    })
  }


  goToProduct(product: ProductModel) {
    this.router.navigateByUrl(`product/${product.publicId}`,{state: {product}})
  }
}

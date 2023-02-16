import {Component, OnInit} from '@angular/core';
import {ProductApiService} from "../../product/product-api.service";
import {forkJoin, map, of, switchMap} from "rxjs";
import {ProductModel} from "../../product/models/ProductModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private productApiService: ProductApiService, private router: Router, private route: ActivatedRoute) {
  }

  isBold: boolean;
  productList: ProductModel[];
  catalogList = this.productApiService.getCatalogs().pipe(switchMap((val) => {
    forkJoin(val.map((catalog) => {
      return this.productApiService.getCatalog(catalog.publicId!);
    })).pipe(map(catalogs => catalogs.map(catalog => catalog.products))).subscribe((products) => {
      this.productList = products.reduce((acc, val) => acc!.concat(val!), []) ?? [];
    });
    return of(val);
  }));

  ngOnInit() {


    //
    // this.productApiService.getCatalog().subscribe((catalogs) => {
    //   this.isBold = true;
    //   this.catalogList = catalogs;
    //     console.log(catalogs);
    //   }
    // )
  }

  getIsBold() {
    return this.isBold ? 'font-extrabold' : 'font-medium';
  }


  deleteProduct(publicId: string) {
    this.productApiService.deleteProduct(publicId).subscribe(() => {
      this.productList = this.productList.filter((product) => product.publicId !== publicId);
    })
  }

  deleteCatalog(publicId: string) {
    this.productApiService.deleteCatalog(publicId).subscribe(() => {
      this.catalogList = this.catalogList.pipe(
        map((catalogs) =>
          catalogs.filter((catalog) => catalog.publicId !== publicId)));
    });
  }

  createNewProduct() {
    this.router.navigate(['product/new'], {relativeTo: this.route});
  }
}

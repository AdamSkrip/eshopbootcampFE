import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatalogModel} from "./models/CatalogModel";
import {ProductModel} from "./models/ProductModel";

const PRODUCTS_BASE_URL = 'api/products';
const CATALOGS_BASE_URL = 'api/catalogs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  constructor(private http: HttpClient) {
  }

  getCatalogs() {
    return this.http.get<CatalogModel[]>(CATALOGS_BASE_URL);
  }

  getCatalog(id : string) {
    return this.http.get<CatalogModel>(CATALOGS_BASE_URL + '/' + id);
  }

  createCatalog(catalog: CatalogModel) {
    return this.http.post(CATALOGS_BASE_URL,catalog);
  }

  updateCatalog(id:string,catalog: CatalogModel) {
    return this.http.put(CATALOGS_BASE_URL + '/' + id,catalog);
  }

  deleteCatalog(id:string) {
    return this.http.delete(CATALOGS_BASE_URL + '/' + id);
  }


  getProduct(id: string){
    return this.http.get<ProductModel>(PRODUCTS_BASE_URL + `/${id}`);
  }

  deleteProduct(id: string){
    return this.http.delete<ProductModel[]>(PRODUCTS_BASE_URL + `/${id}`);
  }

  createProduct(catalogId: string, product : ProductModel){
    return this.http.post(`/${CATALOGS_BASE_URL}/`+ catalogId + '/products',product);
  }

  updateProduct(id: string, product : ProductModel){
    return this.http.put(PRODUCTS_BASE_URL + `/${id}`,product);
  }

}

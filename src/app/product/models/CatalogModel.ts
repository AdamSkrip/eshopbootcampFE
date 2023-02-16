import {ProductModel} from "./ProductModel";

export interface CatalogModel {
  publicId: string,
  name: string,
  description: string,
  products : ProductModel[]
}

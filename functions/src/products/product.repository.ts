import {Product} from "../models/product";

export interface ProductRepository {
  deleteProduct(id: string): Promise<any>

  create(product: Product): Promise<Product>;

  updateProduct(prod: Product): Promise<any>;
}

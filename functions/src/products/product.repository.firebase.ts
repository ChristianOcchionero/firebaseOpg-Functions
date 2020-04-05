import {ProductRepository} from './product.repository';
import * as admin from "firebase-admin";
import {Product} from "../models/product";

export class ProductRepositoryFirebase implements ProductRepository {
  productsPath = 'products';
  stocksPath = 'stock'

  deleteProduct(id: string): Promise<any> {
    return this.db().doc(`${this.productsPath}/${id}`).delete();
  }

  async updateProduct(prod: Product): Promise<any> {
    await this.db().doc(`${this.productsPath}/${prod.id}`).update(prod);
    await this.db().doc(`${this.stocksPath}/${prod.id}`);
    return Promise.resolve(prod);
  }
  async create(product: Product): Promise<Product> {
    await this.db().collection(`${this.productsPath}`).add(product);
    return Promise.resolve(product);
  }

  db(): FirebaseFirestore.Firestore {
    return admin.firestore();
  }
}

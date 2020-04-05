import {ProductRepository} from "./product.repository";
import {Product} from "../models/product";
import {StockRepository} from '../stock/stock.repository';

export class ProductService {
  constructor(private productRepository: ProductRepository, private stockRepository: StockRepository) {
  }

  deleteProduct(id: string): Promise<void> {
    return this.productRepository.deleteProduct(id);
  }

  async create(product: Product): Promise<Product> {
    await this.stockRepository.create(product, 5);
    return Promise.resolve(product);
  }

  updateProduct(prodId: string, prod: Product): Promise<void> {
    return this.productRepository.updateProduct({
      id: prodId,
      name: prod.name,
      price: prod.price,
      timesPurchased: prod.timesPurchased
    });
  }
}

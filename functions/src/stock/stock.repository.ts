import {Product} from '../models/product';
import {Stock} from '../models/stock';

export interface StockRepository {
  create(product: Product, number: number): Promise<Stock>;
}

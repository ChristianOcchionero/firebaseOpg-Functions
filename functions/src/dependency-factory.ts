import {ProductController} from './products/product.controller';
import {ProductRepository} from './products/product.repository';
import {ProductControllerFirebase} from './products/product.controller.firebase';
import {ProductService} from './products/product.service';
import {ProductRepositoryFirebase} from './products/product.repository.firebase';
import {StockRepository} from './stock/stock.repository';
import {StockRepositoryFirebase} from './stock/stock.repository.firebase';


export class DependencyFactory {
  getProductController(): ProductController {
    const repo: ProductRepository = new ProductRepositoryFirebase();
    const stockRepo: StockRepository = new StockRepositoryFirebase()
    const service: ProductService = new ProductService(repo, stockRepo);
    return new ProductControllerFirebase(service)
  }
}

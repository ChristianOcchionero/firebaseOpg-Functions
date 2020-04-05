import {ProductController} from './product.controller';
import {ProductService} from './product.service';
import {Change, EventContext} from "firebase-functions";
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {Product} from "../models/product";

export class ProductControllerFirebase implements ProductController {

  constructor(private productService: ProductService) {
  }

  deleteProduct(context: EventContext): Promise<void> {
    return  this.productService.deleteProduct(context.params.id);
  }

  updateProduct(snap: Change<DocumentSnapshot>, context: EventContext): Promise<void> {
    const prod = snap.after.data() as Product;
    return this.productService.updateProduct(context.params.id, prod);
  }
  create(snap: DocumentSnapshot, context: EventContext): Promise<Product> {
    const product = snap.data() as Product;
    product.id = context.params.prodId;
    return this.productService.create(product);
  }

}

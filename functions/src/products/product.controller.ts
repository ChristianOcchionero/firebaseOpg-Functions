import {Change, EventContext} from "firebase-functions";
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";
import {Product} from "../models/product";

export interface ProductController {
  deleteProduct(context: EventContext): Promise<void>;

  create(snap: DocumentSnapshot, context: EventContext): Promise<Product>;

  updateProduct(snap: Change<DocumentSnapshot>, context: EventContext): Promise<void>;
}

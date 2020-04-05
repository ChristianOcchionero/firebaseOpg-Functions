
import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import { DependencyFactory} from "./dependency-factory";

const difa = new DependencyFactory()

admin.initializeApp({
  databaseURL: 'https://fir-assi.firebaseio.com'
});

exports.userDeleted = functions.firestore.document('users/{uid}')
  .onDelete((snapshot, context) => {
    return admin.auth().deleteUser(context.params.uid).then(() => {
      console.log("Deleted user")
    }).catch(e => {
      console.log("Error: ", e);
    })
  });

exports.deleteProduct = functions.firestore.document('products/{id}')
  .onDelete((snapshot, context) => {
    return difa.getProductController().deleteProduct(context);
  });

exports.updateProduct = functions.firestore.document('products/{id}')
  .onUpdate((snap, context) => {
    return difa.getProductController().updateProduct(snap, context);
  });

exports.createProduct = functions.firestore.document('products/{id}')
  .onCreate((snap, context) => {
    return difa.getProductController().create(snap, context);
  });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

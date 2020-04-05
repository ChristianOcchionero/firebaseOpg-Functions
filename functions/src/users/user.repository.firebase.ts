import * as admin from "firebase-admin";
import {UserRepository} from "./user.repository";
import {EventContext} from "firebase-functions";

export class UserRepositoryFirebase implements UserRepository {
  usersPath = 'users/{uid}';

  deleteUser(context: EventContext): Promise<any> {
    return admin.auth().deleteUser(context.params.uid);
  }
}

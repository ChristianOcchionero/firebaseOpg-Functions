import {EventContext} from "firebase-functions";

export interface UserRepository {
  deleteUser(context: EventContext): Promise<any>
}

import {EventContext} from "firebase-functions";

export interface UserController {
  deleteUser(context: EventContext): Promise<any>;
}

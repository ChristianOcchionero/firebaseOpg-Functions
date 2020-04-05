import {UserController} from "./user.controller";
import {EventContext} from "firebase-functions";
import {UserService} from "./user.service";

export class UserControllerFirebase implements UserController{
  constructor(private userService: UserService) {
  }
  deleteUser(context: EventContext): Promise<any> {
    return this.userService.deleteUser(context.params.uid);
  }
}

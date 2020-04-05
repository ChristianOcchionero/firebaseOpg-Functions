import {UserRepository} from "./user.repository";
import {EventContext} from "firebase-functions";

export class UserService {
  constructor(private userRepository: UserRepository) {
  }

  deleteUser(context: EventContext): Promise<any> {
    return this.userRepository.deleteUser(context.params.uid);
  }
}

import { IUsersRepository } from "modules/users/repositories/IUsersRepository";

import { User } from "../../model/User";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw Error("User not found!");
    }

    return this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };

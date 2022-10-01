import { IUsersRepository } from "modules/users/repositories/IUsersRepository";

import { User } from "../../model/User";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };

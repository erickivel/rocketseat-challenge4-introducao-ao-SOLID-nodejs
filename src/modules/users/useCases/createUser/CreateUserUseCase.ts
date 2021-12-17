import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const userExists = this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new Error("User already exists");
    }

    const newUser = this.usersRepository.create({ email, name });

    return newUser;
  }
}

export { CreateUserUseCase };

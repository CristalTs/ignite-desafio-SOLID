import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const id = String(user_id);
    const user = this.usersRepository.findById(id);

    if (!user.admin) {
      throw new Error("Mensagem de erro");
    }

    if (!user) {
      throw new Error("Mensagem de erro");
    }
    const users: User[] = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase, IRequest };

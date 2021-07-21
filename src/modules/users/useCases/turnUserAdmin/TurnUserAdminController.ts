import { Request, Response } from "express";

import { TurnUserAdminUseCase, IRequest } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const object: IRequest = { user_id };
      const user = this.turnUserAdminUseCase.execute(object);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };

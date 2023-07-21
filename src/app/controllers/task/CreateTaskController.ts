import { UserModel } from "../../../domain/models/UserModel";
import repos from "../../../infra/database";
import { validSchema } from "../../../validators";
import { TaskDTO } from "../../dtos/TaskDTO";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";

export class CreateTaskController implements Controller {

  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    const { body } = req;
    const { data: current_user } = req.auth_user!;

    const validationTask = await validSchema("task:create", {
      title: body.title,
      description: body.description,
      boardId: body.boardId,
      ownerId: current_user.id,
    });

    if (validationTask.error) {
      return res.status(400).json({
        error: validationTask.error,
      });
    }

    const existsBoard = await repos.board.findContributors({ id: body.boardId });
    const filterUser = (user: UserModel) => user.id === current_user.id;

    if (!existsBoard || !existsBoard.filter(filterUser)) {
      return res.status(404).json({
        error: "Not found board"
      });
    }
    
    const createdTask = await repos.task.create({
      title: body.title,
      description: body.description,
      boardId: body.boardId,
      ownerId: current_user.id,
    });

    return res.json({
      data: TaskDTO.from(createdTask),
    });
  }

}
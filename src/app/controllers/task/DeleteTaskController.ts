import repos from "../../../infra/database";
import { TaskDTO } from "../../dtos/TaskDTO";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";

export class DeleteTaskController implements Controller {

  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    const { id } = req.params;
    const { data: current_user } = req.auth_user!;

    const existsBoard = await repos.task.findById({ id });
    if (!existsBoard || existsBoard.ownerId !== current_user.id) {
      return res.status(404).json({
        error: "Not found task"
      });
    }

    const deletedTask = await repos.task.deleteById({ id });
    return res.json({
      data: TaskDTO.from(deletedTask),
    });

  }

}
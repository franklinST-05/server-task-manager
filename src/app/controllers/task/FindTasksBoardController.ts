import { UserModel } from "../../../domain/models/UserModel";
import repos from "../../../infra/database";
import { TaskDTO } from "../../dtos/TaskDTO";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";

export class FindTasksBoardController implements Controller {

  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    const { boardId } = req.params;
    const { data: current_user } = req.auth_user!;

    const existsBoard = await repos.board.findContributors({ id: boardId });
    const filterUser = (user: UserModel) => user.id === current_user.id;
    
    if (!existsBoard || !existsBoard.filter(filterUser)) {
      return res.status(404).json({
        error: "Not found board"
      });
    }

    const tasks = await repos.task.findByBoardId({ boardId });
    return res.status(200).json({
      data: TaskDTO.fromArray(tasks),
    });
  }

}
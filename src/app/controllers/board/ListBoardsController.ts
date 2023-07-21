import repos from "../../../infra/database";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";
import { BoardDTO } from "../../dtos/BoardDTO";

export class ListBoardsController implements Controller {

  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
   
    const { data: current_user } = req.auth_user!;
    const boards = await repos.board.findByOwnerId({ ownerId: current_user.id });
   
    return res.json({
      data: BoardDTO.fromArray(boards)
    });
  }

}
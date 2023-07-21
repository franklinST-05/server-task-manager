import repos from "../../../infra/database";
import { BoardDTO } from "../../dtos/BoardDTO";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";

export class FindBoardController implements Controller {
  
  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    const { id } = req.params;
    const { data: current_user } = req.auth_user!;

    const existsBoard = await repos.board.findById({ id });
    if(!existsBoard || existsBoard.ownerId !== current_user.id) {
      return res.status(404).json({
        error: "Not found board"
      });
    }

    return res.json({
      data: BoardDTO.from(existsBoard)
    });
  }

}
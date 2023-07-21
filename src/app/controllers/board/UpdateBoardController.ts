import repos from "../../../infra/database";
import { validSchema } from "../../../validators";
import { BoardDTO } from "../../dtos/BoardDTO";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";

export class UpdateBoardController implements Controller {

  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {

    const { body } = req;
    const { data: current_user } = req.auth_user!;

    const validationBoard = await validSchema("board:update", {
      id: body.id,
      title: body.title,
      description: body.description,
      active: body.active
    });

    if (validationBoard.error) {
      return res.status(400).json({
        error: validationBoard.error
      });
    }

    const existsBoard = await repos.board.findById({ id: body.id });
    if (!existsBoard || existsBoard.ownerId !== current_user.id) {
      return res.status(404).json({
        error: "Not found board"
      });
    }

    const updatedBoard = await repos.board.update({
      id: body.id,
      title: body.title,
      description: body.description,
      active: body.active
    });

    return res.json({
      data: BoardDTO.from(updatedBoard)
    });
  }

}
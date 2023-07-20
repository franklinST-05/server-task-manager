import repos from "../../../infra/database";
import { validSchema } from "../../../validators";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";
import { BoardDTO } from "../../dtos/BoardDTO";
import { toSlug } from "../../../utils/slug";

export class CreateBoardController implements Controller {

  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    
    const { title, description } = req.body;
    const { data: current_user } = req.auth_user!;

    const validationBoard = await validSchema("board:create", {
      title,
      description,
      ownerId: current_user.id
    });


    if (validationBoard.error) {
      return res.status(400).json({
        error: validationBoard.error
      });
    }

    const board = await repos.board.create({
      ownerId: current_user.id,
      title,
      description,
      slug: toSlug(title)
    });

    return res.json({
      data: BoardDTO.from(board)
    });
  }

}
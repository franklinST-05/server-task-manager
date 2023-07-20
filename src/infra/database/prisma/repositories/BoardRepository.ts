import { BoardModel } from "../../../../domain/models/BoardModel";
import { BoardRepo, CreateBoardModel } from "../../../../domain/usecases/board";
import client from "../client";

export class BoardRepository implements BoardRepo {
  
  async create({ ownerId, slug, title, description }: CreateBoardModel): Promise<BoardModel> {
    const actualDate = new Date();
    return await client.board.create({
      data: {
        ownerId,
        slug,
        title,
        description,
        active: true,
        createdAt: actualDate,
        updatedAt: actualDate,
      }
    });
  }

}
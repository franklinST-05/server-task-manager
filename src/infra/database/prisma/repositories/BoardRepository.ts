import { BoardModel } from "../../../../domain/models/BoardModel";
import { BoardRepo, CreateBoardModel, FindBoardByOwnerIdModel } from "../../../../domain/usecases/board";
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

  async findByOwnerId({ ownerId }: FindBoardByOwnerIdModel): Promise<BoardModel[]> {
    return await client.board.findMany({
      where: { ownerId }
    });
  }

}
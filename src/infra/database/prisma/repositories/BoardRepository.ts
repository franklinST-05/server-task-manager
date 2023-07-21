import { BoardModel } from "../../../../domain/models/BoardModel";
import { UserModel } from "../../../../domain/models/UserModel";
import { BoardRepo, CreateBoardModel, DeleteBoardByIdModel, FindBoardByIdModel, FindBoardByOwnerIdModel, FindContributorsBoardModel, UpdateBoardModel } from "../../../../domain/usecases/board";
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

  async update({ id, ...changes }: UpdateBoardModel): Promise<BoardModel> {
    const actualDate = new Date();
    return await client.board.update({
      where: { id },
      data: {
        ...changes,
        updatedAt: actualDate,
      }
    });
  }

  async findById({ id }: FindBoardByIdModel): Promise<BoardModel | null> {
    return await client.board.findUnique({
      where: { id }
    });
  }

  async deleteById({ id }: DeleteBoardByIdModel): Promise<BoardModel> {
    return await client.board.delete({
      where: { id }
    });
  }

  async findContributors({ id }: FindContributorsBoardModel): Promise<UserModel[]> {
    const result =  await client.board.findUnique({
      where: { id },
      select: {
        Owner: true,
        UsersContributing: true,
      }
    });

    if(!result) return [];
    return [result.Owner, ...result.UsersContributing];
    
  }

}
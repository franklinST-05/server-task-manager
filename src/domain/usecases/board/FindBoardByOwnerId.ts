import { BoardModel } from "../../models/BoardModel";

export interface FindBoardByOwnerIdModel {
  ownerId: string;
}

export interface FindBoardByOwnerId {
  findByOwnerId(model: FindBoardByOwnerIdModel): Promise<BoardModel[]>
}
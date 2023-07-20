import { BoardModel } from "../../models/BoardModel";

export interface CreateBoardModel {
  ownerId: string;
  slug: string;
  title: string;
  description: string;
}

export interface CreateBoard {
  create(model: CreateBoardModel): Promise<BoardModel>
}
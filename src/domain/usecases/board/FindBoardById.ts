import { BoardModel } from "../../models/BoardModel";

export interface FindBoardByIdModel {
  id: string;
}

export interface FindBoardById {
  findById(model: FindBoardByIdModel): Promise<BoardModel | null>
}
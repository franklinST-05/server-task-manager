import { BoardModel } from "../../models/BoardModel";

export interface DeleteBoardByIdModel {
  id: string;
}

export interface DeleteBoardById {
  deleteById(model: DeleteBoardByIdModel): Promise<BoardModel>
}
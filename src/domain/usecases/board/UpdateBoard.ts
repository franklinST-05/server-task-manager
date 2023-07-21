import { BoardModel } from "../../models/BoardModel";

export interface UpdateBoardModel {
  id: string;
  title?: string;
  description?: string;
  active?: boolean;
}

export interface UpdateBoard {
  update(model: UpdateBoardModel): Promise<BoardModel>
}
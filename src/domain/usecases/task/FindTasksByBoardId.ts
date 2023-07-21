import { TaskModel } from "../../models/TaskModel";

export interface FindTasksByBoardIdModel {
  boardId: string;
}

export interface FindTasksByBoardId {
  findByBoardId(mode: FindTasksByBoardIdModel): Promise<TaskModel[]>
}
import { TaskModel } from "../../models/TaskModel";

export interface FindTaskByIdModel {
  id: string;
}

export interface FindTaskById {
  findById(model: FindTaskByIdModel): Promise<TaskModel | null>
}
import { TaskModel } from "../../models/TaskModel";

export interface DeleteTaskByIdModel {
  id: string;
}

export interface DeleteTaskById {
  deleteById(model: DeleteTaskByIdModel): Promise<TaskModel>
}
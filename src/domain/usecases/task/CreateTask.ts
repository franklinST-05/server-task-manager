import { TaskModel } from "../../models/TaskModel";

export interface CreateTaskModel {
  title: string;
  description: string;
  done?: boolean
  boardId: string;
  ownerId: string;
}

export interface CreateTask {
  create(model: CreateTaskModel): Promise<TaskModel>
}
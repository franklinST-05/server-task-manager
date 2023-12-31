import { TaskModel } from "../../../../domain/models/TaskModel";
import { CreateTaskModel, DeleteTaskByIdModel, FindTaskByIdModel, FindTasksByBoardIdModel, TaskRepo } from "../../../../domain/usecases/task";
import client from "../client";

export class TaskRepository implements TaskRepo {

  async create({ title, description, done, ownerId, boardId }: CreateTaskModel): Promise<TaskModel> {
    return await client.task.create({
      data: {
        title,
        description,
        done,
        ownerId,
        boardId
      }
    });
  }

  async findById({ id }: FindTaskByIdModel): Promise<TaskModel | null> {
    return await client.task.findUnique({
      where: { id }
    });
  }

  async deleteById({ id }: DeleteTaskByIdModel): Promise<TaskModel> {
    return await client.task.delete({
      where: { id }
    });
  }

  async findByBoardId({ boardId }: FindTasksByBoardIdModel): Promise<TaskModel[]> {
    return await client.task.findMany({
      where: { boardId }
    });
  }

}
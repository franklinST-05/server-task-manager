import { TaskModel } from "../../../../domain/models/TaskModel";
import { CreateTaskModel, FindTaskByIdModel, TaskRepo } from "../../../../domain/usecases/task";
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

}
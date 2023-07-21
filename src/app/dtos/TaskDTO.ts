import { TaskModel } from "../../domain/models/TaskModel";

export class TaskDTO {

  static from({ id, title, description, boardId, createdAt, updatedAt, done, ownerId }: TaskModel) {
    return { id, title, description, boardId, createdAt, updatedAt, done, ownerId };
  }
  
  static fromArray(boards: TaskModel[]) {
    return boards.map((board) => this.from(board));
  }
}
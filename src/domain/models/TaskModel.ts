export interface TaskModel {
  id: string;
  title: string;
  description: string;
  done: boolean
  createdAt: Date;
  updatedAt: Date;
  boardId: string;
  ownerId: string;
}
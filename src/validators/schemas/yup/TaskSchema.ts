import { boolean, date, object, string } from "yup";

export const TaskSchema = object({
  id: string().uuid().required(),
  title: string().min(4).required(),
  description: string().min(8).required(),
  done: boolean().required(),
  createdAt: date().required(),
  updatedAt: date().required(),
  boardId: string().uuid().required(),
  ownerId: string().uuid().required(),
});

export const CreateTaskSchema = TaskSchema.pick([
  "title",
  "description",
  "boardId",
  "ownerId"
]);
import { boolean, date, object, string } from "yup";

export const BoardSchema = object({
  id: string().uuid().required(),
  ownerId: string().uuid().required(),
  slug: string().min(6).required(),
  title: string().min(6).required(),
  description: string().min(12).required(),
  createdAt: date().required(),
  updatedAt: date().required(),
  active: boolean().required(),
});

export const CreateBoardSchema = BoardSchema.pick([
  "ownerId",
  "title",
  "description"
]);

export const UpdateBoardSchema = object({
  id: string().uuid().required(),
  title: string().min(6),
  description: string().min(12),
  active: boolean(),
});

import { boolean, date, object, string } from "yup";

export const UserSchema = object({
  id: string().uuid().required(),
  username: string().min(3).required(),
  email: string().email().required(),
  password: string().trim().min(6).required(),
  createdAt: date().required(),
  updatedAt: date().required(),
  verified: boolean().required(),
});

export const CreateUserSchema = UserSchema.pick([
  "username",
  "email",
  "password"
]);

export const AuthUserSchema = UserSchema.pick([
  "email",
  "password"
]);
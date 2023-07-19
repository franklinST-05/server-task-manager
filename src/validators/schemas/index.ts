import { AuthUserSchema, CreateUserSchema, RecoveryUserSchema, UserSchema } from "./yup/UserSchema";
import { InferType } from "yup";

export const schemas = {
  "user": UserSchema,
  "user:create": CreateUserSchema,
  "user:auth": AuthUserSchema,
  "user:recovery": RecoveryUserSchema
};

export type schemasKeys = keyof typeof schemas;
export type schema<Name extends schemasKeys> = InferType<typeof schemas[Name]>
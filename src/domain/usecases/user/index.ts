import { CreateUser } from "./CreateUser";
import { FindUserByEmail } from "./FindUserByEmail";
import { FindUserByEmailOrUsername } from "./FindUserByEmailOrUsername";
import { UpdateUser } from "./UpdateUser";

export * from "./CreateUser";
export * from "./FindUserByEmailOrUsername";
export * from "./UpdateUser";
export * from "./FindUserByEmail";

export type UserRepo = CreateUser & FindUserByEmailOrUsername & UpdateUser & FindUserByEmail;
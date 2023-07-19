import { CreateUser } from "./CreateUser";
import { FindUserByEmailOrUsername } from "./FindUserByEmailOrUsername";
import { UpdateUser } from "./UpdateUser";

export * from "./CreateUser";
export * from "./FindUserByEmailOrUsername";
export * from "./UpdateUser";

export type UserRepo = CreateUser & FindUserByEmailOrUsername & UpdateUser;
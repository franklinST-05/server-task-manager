import { CreateUser } from "./CreateUser";
import { FindUserByEmailOrUsername } from "./FindUserByEmailOrUsername";

export * from "./CreateUser";
export * from "./FindUserByEmailOrUsername";

export type UserRepo = CreateUser & FindUserByEmailOrUsername;
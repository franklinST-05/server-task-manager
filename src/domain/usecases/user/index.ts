import { CreateUser } from "./CreateUser";
import { FindUserByEmail } from "./FindUserByEmail";
import { FindUserByEmailOrUsername } from "./FindUserByEmailOrUsername";
import { FindUserById } from "./FindUserById";
import { UpdateUser } from "./UpdateUser";

export * from "./CreateUser";
export * from "./FindUserByEmailOrUsername";
export * from "./UpdateUser";
export * from "./FindUserByEmail";
export * from "./FindUserById";

export type UserRepo = CreateUser & FindUserByEmailOrUsername & UpdateUser & FindUserByEmail & FindUserById;
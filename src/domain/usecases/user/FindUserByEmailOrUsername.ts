import { UserModel } from "../../models/UserModel";

export interface FindUserByEmailOrUsernameModel {
  email: string;
  username: string;
}

export interface FindUserByEmailOrUsername {
  findByEmailOrUsername(model: FindUserByEmailOrUsernameModel): Promise<UserModel | null>
}

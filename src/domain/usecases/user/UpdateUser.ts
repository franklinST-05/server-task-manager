import { UserModel } from "../../models/UserModel";

export interface UpdateUserModel {
  id: string;
  username?: string;
  email?: string;
  password?: string;
  verified?: boolean;
}

export interface UpdateUser {
  update(model: UpdateUserModel): Promise<UserModel>
}
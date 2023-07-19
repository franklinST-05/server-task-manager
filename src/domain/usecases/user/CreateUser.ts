import { UserModel } from "../../models/UserModel";

export interface CreateUserModel {
  username: string;
  email: string;
  password: string;
}

export interface CreateUser {
  create(model: CreateUserModel): Promise<UserModel>
}
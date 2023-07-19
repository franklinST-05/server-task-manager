import { UserModel } from "../../models/UserModel";

export interface FindUserByIdModel {
  id: string;
}

export interface FindUserById {
  findById(model: FindUserByIdModel): Promise<UserModel | null>
}

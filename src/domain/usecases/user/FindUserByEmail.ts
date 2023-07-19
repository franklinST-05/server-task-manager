import { UserModel } from "../../models/UserModel";

export interface FindUserByEmailModel {
  email: string;
}

export interface FindUserByEmail {
  findByEmail(model: FindUserByEmailModel): Promise<UserModel | null>
}

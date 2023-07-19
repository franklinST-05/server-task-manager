import { UserModel } from "../../../../domain/models/UserModel";
import { CreateUserModel, UserRepo } from "../../../../domain/usecases/user";
import client from "../client";

export class UserRepository implements UserRepo {
  
  async create({ email, password, username }: CreateUserModel): Promise<UserModel> {
    const actualDate = new Date();

    return await client.user.create({
      data: {
        email: email,
        password: password,
        username: username,
        createdAt: actualDate,
        updatedAt: actualDate,
        verified: false,
      }
    });
  }

}
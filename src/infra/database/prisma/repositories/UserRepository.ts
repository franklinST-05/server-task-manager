import { UserModel } from "../../../../domain/models/UserModel";
import { CreateUserModel, FindUserByEmailOrUsernameModel, UpdateUserModel, UserRepo } from "../../../../domain/usecases/user";
import client from "../client";

export class UserRepository implements UserRepo {

  async create({ email, password, username }: CreateUserModel): Promise<UserModel> {
    const actualDate = new Date();

    return await client.user.create({
      data: {
        email,
        password,
        username,
        createdAt: actualDate,
        updatedAt: actualDate,
        verified: false,
      }
    });
  }

  async findByEmailOrUsername({ email, username }: FindUserByEmailOrUsernameModel): Promise<UserModel | null> {
    return await client.user.findFirst({
      where: {
        OR: [{ email }, { username }]
      }
    });
  }
  
  async update({ id, ...changes }: UpdateUserModel): Promise<UserModel> {
    const actualDate = new Date();
    return await client.user.update({
      where: { id },
      data: {
        ...changes,
        updatedAt: actualDate,
      }
    });
  }
}
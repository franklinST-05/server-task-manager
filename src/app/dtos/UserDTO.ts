import { UserModel } from "../../domain/models/UserModel";

export class UserDTO {
  static from({ username, email, verified, createdAt, updatedAt }: UserModel) {
    return { username, email, verified, createdAt, updatedAt };
  }
}
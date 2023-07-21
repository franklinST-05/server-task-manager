import { UserModel } from "../../models/UserModel";

export interface FindContributorsBoardModel {
  id: string;
}

export interface FindContributorsBoard {
  findContributors(model:FindContributorsBoardModel): Promise<UserModel[]>
}
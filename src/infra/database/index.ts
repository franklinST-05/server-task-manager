import { UserRepository } from "./prisma/repositories/UserRepository";

const userRepo = new UserRepository();
const repos = {
  user: userRepo
};

export default repos;
import { BoardRepository } from "./prisma/repositories/BoardRepository";
import { UserRepository } from "./prisma/repositories/UserRepository";

const userRepo = new UserRepository();
const boardRepo = new BoardRepository();

const repos = {
  user: userRepo,
  board: boardRepo,
};

export default repos;
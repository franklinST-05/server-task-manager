import { BoardRepository } from "./prisma/repositories/BoardRepository";
import { TaskRepository } from "./prisma/repositories/TaskRepository";
import { UserRepository } from "./prisma/repositories/UserRepository";

const userRepo = new UserRepository();
const boardRepo = new BoardRepository();
const taskRepo = new TaskRepository();

const repos = {
  user: userRepo,
  board: boardRepo,
  task: taskRepo,
};

export default repos;
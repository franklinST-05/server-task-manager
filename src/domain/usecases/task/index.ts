import { CreateTask } from "./CreateTask";
import { DeleteTaskById } from "./DeleteTaskById";
import { FindTaskById } from "./FindTaskById";
import { FindTasksByBoardId } from "./FindTasksByBoardId";

export * from "./CreateTask";
export * from "./FindTaskById";
export * from "./DeleteTaskById";
export * from "./FindTasksByBoardId";

export type TaskRepo = CreateTask & FindTaskById &
  DeleteTaskById & FindTasksByBoardId;
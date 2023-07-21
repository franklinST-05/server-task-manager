import { CreateTask } from "./CreateTask";
import { FindTaskById } from "./FindTaskById";

export * from "./CreateTask";
export * from "./FindTaskById";

export type TaskRepo = CreateTask & FindTaskById;
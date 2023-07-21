import { CreateTask } from "./CreateTask";
import { DeleteTaskById } from "./DeleteTaskById";
import { FindTaskById } from "./FindTaskById";

export * from "./CreateTask";
export * from "./FindTaskById";
export * from "./DeleteTaskById";

export type TaskRepo = CreateTask & FindTaskById & DeleteTaskById;
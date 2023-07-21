import { CreateBoard } from "./CreateBoard";
import { DeleteBoardById } from "./DeleteBoardById";
import { FindBoardById } from "./FindBoardById";
import { FindBoardByOwnerId } from "./FindBoardByOwnerId";
import { UpdateBoard } from "./UpdateBoard";

export * from "./CreateBoard";
export * from "./FindBoardByOwnerId";
export * from "./UpdateBoard";
export * from "./FindBoardById";
export * from "./DeleteBoardById";

export type BoardRepo = CreateBoard & FindBoardByOwnerId & UpdateBoard & FindBoardById & DeleteBoardById;
import { CreateBoard } from "./CreateBoard";
import { FindBoardByOwnerId } from "./FindBoardByOwnerId";
import { UpdateBoard } from "./UpdateBoard";

export * from "./CreateBoard";
export * from "./FindBoardByOwnerId";
export * from "./UpdateBoard";

export type BoardRepo = CreateBoard & FindBoardByOwnerId & UpdateBoard;
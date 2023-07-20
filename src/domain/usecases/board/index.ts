import { CreateBoard } from "./CreateBoard";
import { FindBoardByOwnerId } from "./FindBoardByOwnerId";

export * from "./CreateBoard";
export * from "./FindBoardByOwnerId";

export type BoardRepo = CreateBoard & FindBoardByOwnerId;
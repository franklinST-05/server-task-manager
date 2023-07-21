import { BoardModel } from "../../domain/models/BoardModel";

export class BoardDTO {

  static from({ id, title, slug, description, active, createdAt, updatedAt }: BoardModel) {
    return { id, title, slug, description, active, createdAt, updatedAt };
  }
  
  static fromArray(boards: BoardModel[]) {
    return boards.map((board) => this.from(board));
  }
}
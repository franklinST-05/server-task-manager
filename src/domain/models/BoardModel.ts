export interface BoardModel {
  id: string;
  ownerId: string;
  slug: string;
  title: string;
  description: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
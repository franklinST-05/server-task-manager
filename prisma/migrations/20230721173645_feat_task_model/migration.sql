-- CreateTable
CREATE TABLE "tb_task" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "boardId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "tb_task_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_task" ADD CONSTRAINT "tb_task_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "tb_board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_task" ADD CONSTRAINT "tb_task_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "tb_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

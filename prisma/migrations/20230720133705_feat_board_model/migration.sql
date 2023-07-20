-- CreateTable
CREATE TABLE "tb_board" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "tb_board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_board_user_contributing" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_board_slug_key" ON "tb_board"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_board_user_contributing_AB_unique" ON "_board_user_contributing"("A", "B");

-- CreateIndex
CREATE INDEX "_board_user_contributing_B_index" ON "_board_user_contributing"("B");

-- AddForeignKey
ALTER TABLE "tb_board" ADD CONSTRAINT "tb_board_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "tb_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_board_user_contributing" ADD CONSTRAINT "_board_user_contributing_A_fkey" FOREIGN KEY ("A") REFERENCES "tb_board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_board_user_contributing" ADD CONSTRAINT "_board_user_contributing_B_fkey" FOREIGN KEY ("B") REFERENCES "tb_user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

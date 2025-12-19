/*
  Warnings:

  - You are about to drop the column `authorId` on the `url` table. All the data in the column will be lost.
  - Added the required column `folder` to the `url` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "url" DROP CONSTRAINT "url_authorId_fkey";

-- AlterTable
ALTER TABLE "url" DROP COLUMN "authorId",
ADD COLUMN     "folder" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "folder" (
    "id" SERIAL NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "folder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "folder" ADD CONSTRAINT "folder_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "url" ADD CONSTRAINT "url_folder_fkey" FOREIGN KEY ("folder") REFERENCES "folder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[authorId,folderName,parentId]` on the table `folder` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "folder_authorId_folderName_key";

-- CreateIndex
CREATE UNIQUE INDEX "folder_authorId_folderName_parentId_key" ON "folder"("authorId", "folderName", "parentId");

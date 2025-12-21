/*
  Warnings:

  - A unique constraint covering the columns `[folderId,name]` on the table `fileData` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[authorId,folderName]` on the table `folder` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "fileData_name_key";

-- DropIndex
DROP INDEX "folder_folderName_key";

-- CreateIndex
CREATE UNIQUE INDEX "fileData_folderId_name_key" ON "fileData"("folderId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "folder_authorId_folderName_key" ON "folder"("authorId", "folderName");

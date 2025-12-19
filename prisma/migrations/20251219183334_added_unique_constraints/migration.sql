/*
  Warnings:

  - A unique constraint covering the columns `[folderName]` on the table `folder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "folder_folderName_key" ON "folder"("folderName");

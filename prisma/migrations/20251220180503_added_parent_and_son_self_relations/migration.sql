/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `fileData` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "folder" ADD COLUMN     "isShared" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "parentId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "fileData_name_key" ON "fileData"("name");

-- AddForeignKey
ALTER TABLE "folder" ADD CONSTRAINT "folder_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "folder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

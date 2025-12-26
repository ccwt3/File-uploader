-- DropForeignKey
ALTER TABLE "fileData" DROP CONSTRAINT "fileData_folderId_fkey";

-- DropForeignKey
ALTER TABLE "folder" DROP CONSTRAINT "folder_authorId_fkey";

-- DropForeignKey
ALTER TABLE "folder" DROP CONSTRAINT "folder_parentId_fkey";

-- AddForeignKey
ALTER TABLE "folder" ADD CONSTRAINT "folder_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "folder" ADD CONSTRAINT "folder_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fileData" ADD CONSTRAINT "fileData_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

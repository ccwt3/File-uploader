/*
  Warnings:

  - You are about to drop the `file_Data` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `url` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "file_Data" DROP CONSTRAINT "file_Data_fileId_fkey";

-- DropForeignKey
ALTER TABLE "url" DROP CONSTRAINT "url_folder_fkey";

-- DropTable
DROP TABLE "file_Data";

-- DropTable
DROP TABLE "url";

-- CreateTable
CREATE TABLE "fileData" (
    "id" SERIAL NOT NULL,
    "folderId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "uploadTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fileType" TEXT,

    CONSTRAINT "fileData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fileData" ADD CONSTRAINT "fileData_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "folder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

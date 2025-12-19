/*
  Warnings:

  - Added the required column `folderName` to the `folder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `url` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "folder" ADD COLUMN     "folderName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "url" ADD COLUMN     "url" TEXT NOT NULL;

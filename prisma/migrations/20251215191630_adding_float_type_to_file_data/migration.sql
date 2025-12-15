/*
  Warnings:

  - Added the required column `name` to the `file_Data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `file_Data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "file_Data" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "size" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "upload_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

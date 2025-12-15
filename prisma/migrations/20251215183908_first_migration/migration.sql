-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAuth" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "url" (
    "id" SERIAL NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "file_Data" (
    "id" SERIAL NOT NULL,
    "fileId" INTEGER NOT NULL,

    CONSTRAINT "file_Data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "file_Data_fileId_key" ON "file_Data"("fileId");

-- AddForeignKey
ALTER TABLE "url" ADD CONSTRAINT "url_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_Data" ADD CONSTRAINT "file_Data_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "url"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

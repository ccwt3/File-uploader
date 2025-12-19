import prisma from "../prisma/lib/prisma";

export default async function createFolder(name: string, userId: number) {
  try {
    const newFolder = await prisma.folder.create({
      data: {
        authorId: userId,
        folderName: name,
      },
    });
    return newFolder;
  } catch(err) {
    //console.error(err);
    return false;
  }
}

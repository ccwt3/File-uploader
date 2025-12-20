import prisma from "../prisma/lib/prisma";

export default function getAllFolders(authorId: number) {
  try {
    const folders = prisma.folder.findMany({
      where: {
        authorId: authorId,
      },
    });

    return folders;
  } catch (err) {
    return false;
  }
}

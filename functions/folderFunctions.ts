import prisma from "../prisma/lib/prisma";

export {
  getAllFolders,
  createInitialFolder,
  getFolderChildren,
  createChildrenFolder,
};

async function getAllFolders(authorId: number) {
  try {
    const folders = await prisma.folder.findMany({
      where: {
        AND: {
          authorId: authorId,
          parentId: null,
        },
      },
    });

    return folders;
  } catch (err) {
    return false;
  }
}

async function createInitialFolder(name: string, userId: number, father: any) {
  try {
    const newFolder = await prisma.folder.create({
      data: {
        authorId: userId,
        folderName: name,
        parentId: father,
      },
    });
    return newFolder;
  } catch (err) {
    //console.error(err);
    return false;
  }
}

async function getFolderChildren(userId: number, folderName: string) {
  const parent = await prisma.folder.findUnique({
    where: {
      author_folder: {
        authorId: userId,
        folderName: folderName,
      },
    },
  });
  if (parent === null) return false;

  const children = await prisma.folder.findMany({
    where: {
      parentId: parent?.id || null,
    },
  });
  if (children.length === 0) return [parent];

  return children;
}

async function createChildrenFolder(
  authorId: number,
  name: string,
  parentName: string
) {
  const parent = await prisma.folder.findUnique({
    where: {
      author_folder: {
        authorId: authorId,
        folderName: parentName,
      },
    },
  });

  if (parent === null) return 1;

  try {
    const newFolder = prisma.folder.create({
      data: {
        authorId: authorId,
        folderName: name,
        parentId: parent?.id || null,
      },
    });

    return newFolder;
  } catch (err) {
    return false;
  }
}

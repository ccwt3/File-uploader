import prisma from "../prisma/lib/prisma";

export {
  getAllFolders,
  createInitialFolder,
  getFolderChildren,
  createChildrenFolder,
};

async function getAllFolders(authorId: number) {
  try {
    const generalFolder = await prisma.folder.findFirst({
      where: {
        authorId: authorId,
        folderName: "general",
      },
      orderBy: {
        id: "asc"
      }
    });

    const folders = await prisma.folder.findMany({
      where: {
        AND: {
          authorId: authorId,
          parentId: generalFolder?.id || null,
        },
      },
    });
    return folders;
  } catch (err) {
    return false;
  }
}

async function createInitialFolder(name: string, userId: number) {
  try {
    const parentFolder = await prisma.folder.findFirst({
      where: {
        authorId: userId,
        folderName: "general",
      },
      orderBy: {
        id: "asc",
      }
    });

    const newFolder = await prisma.folder.create({
      data: {
        authorId: userId,
        folderName: name,
        parentId: parentFolder?.id || null,
      },
    });
    return newFolder;
  } catch (err) {
    //console.error(err);
    return false;
  }
}

async function getFolderChildren(userId: number, parentId: number) {
  const children = await prisma.folder.findMany({
    where: {
      authorId: userId,
      parentId: parentId,
    },
  });

  const parent = await prisma.folder.findFirst({
    where: {
      id: parentId,
    },
  });

  if (children.length === 0) return {
    children: [parent],
    parent: parent,
  };

  return {
    children: children,
    parent: parent,
  };
}

async function createChildrenFolder(
  authorId: number,
  name: string,
  parentId: number
) {
  let parent = await prisma.folder.findMany({
    where: {
      AND: {
        id: parentId,
        authorId: authorId,
      },
    },
  });

  if (parent === null) return 1;

  try {
    const newFolder = prisma.folder.create({
      data: {
        authorId: authorId,
        folderName: name,
        parentId: parentId,
      },
    });

    return newFolder;
  } catch (err) {
    return false;
  }
}

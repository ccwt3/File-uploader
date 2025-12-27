import prisma from "../prisma/lib/prisma";

export {
  getRootFolders,
  createRootFolders,
  getFolderFamily,
  createChildrenFolder,
  deleteFolder
};

// return 1; NO FOLDER FOUND
// return 2; UNIQUE CONSTRAINT VIOLATED

async function getRootFolders(userId: number) {
  try {
    const driveFolder = await prisma.folder.findFirst({
      where: {
        authorId: userId,
        folderName: "general",
      },
      orderBy: {
        id: "asc",
      },
    });

    const folders = await prisma.folder.findMany({
      where: {
        AND: {
          authorId: userId,
          parentId: driveFolder?.id || null,
        },
      },
    });
    return folders;
  } catch (err) {
    return false;
  }
}

async function getFolderFamily(userId: number, parentId: number) {
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

  if (children.length === 0)
    return {
      children: [parent],
      parent: parent,
    };

  return {
    children: children,
    parent: parent,
  };
}

async function createRootFolders(name: string, userId: number) {
  try {
    const driveFolder = await prisma.folder.findFirst({
      where: {
        authorId: userId,
        folderName: "general",
      },
      orderBy: {
        id: "asc",
      },
    });

    if (driveFolder === null) return 1;

    const newFolder = await prisma.folder.create({
      data: {
        authorId: userId,
        folderName: name,
        parentId: driveFolder?.id || null,
      },
    });

    return newFolder;
  } catch (err) {
    return 2;
  }
}

async function createChildrenFolder(
  userId: number,
  name: string,
  parentId: number
) {
  let parent = await prisma.folder.findMany({
    where: {
      AND: {
        id: parentId,
        authorId: userId,
      },
    },
  });

  if (parent === null) return 1;

  try {
    const newFolder = await prisma.folder.create({
      data: {
        authorId: userId,
        folderName: name,
        parentId: parentId,
      },
    });

    return newFolder;
  } catch (err) {
    return 2;
  }
}

async function deleteFolder(userId: number, folderId: number) {
  const deletedFolder = await prisma.folder.deleteMany({
    where: {
      AND: {
        id: folderId,
        authorId: userId
      }
    }
  })

  return deletedFolder;
}

async function editFolderName(newName:string, folderId: number, userId: number) {
  return;
}
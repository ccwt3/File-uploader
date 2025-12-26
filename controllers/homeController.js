import * as folderFC from "../functions/folderFunctions.ts";

async function homeGet(req, res) {
  // verify the user is logged
  if (!req.user) {
    return res.redirect("/register");
  }

  const folderId = req.params.folderId;
  const userId = req.user.id;

  if (!isNaN(folderId) && folderId !== undefined) {
    const parentId = Number.parseInt(folderId);
    const folders = await folderFC.getFolderFamily(userId, parentId);

    return res.render("home", {
      user: req.user,
      err: [req.flash("folder") || null],
      folders: folders.children,
      currentFolder: folders.parent,
    });
  }

  const folders = await folderFC.getRootFolders(userId);
  return res.render("home", {
    user: req.user, // use users id and username
    err: [req.flash("folder") || null], // send a message if any error
    folders: folders, // send all the folders of the user
    currentFolder: { folderName: null, id: null },
  });
}

async function homePost(req, res) {
  // verify if the user is logged
  if (!req.user) {
    return res.redirect("/register");
  }
  const query = req.query;
  const userId = req.user.id;

  if (query.action === "create") {
    // if the user sends to create a folder it does it
    const folderName = req.body.folderName;
    let folder;
    const folderId = Number(query.folder);
    if (
      Number.isInteger(folderId) &&
      query.folder.trim() !== "" &&
      query.folder !== undefined
    ) {
      folder = await folderFC.createChildrenFolder(
        userId,
        folderName,
        folderId
      );
    } else if (query.folder == "") {
      folder = await folderFC.createRootFolders(folderName, userId);
    }

    if (folder === 1) {
      req.flash("folder", "Folder not found");
    } else if (folder === 2) {
      req.flash("folder", "Two folders can't have the same name");
    }
  } else if (query.action === "delete" && query.folder) {
    //todo WORK ON THE DELETE PART; CONTROLLER, FOLDERFUNCTIONS
    const folderId = Number(query.folder);
    const folderIsValid =
      Number.isInteger(folderId) &&
      query.folder.trim() !== "" &&
      query.folder !== undefined;

    if (!folderIsValid) {
      return res.redirect("/");
    }

    try {
      const elpepe = await folderFC.deleteFolder(userId, folderId);
      return console.log(elpepe);
    } catch (err) {
      console.error(err);
    } finally {
      return res.redirect("/");
    }
  } else if (query.action === "edit" && query.folder) {
    console.log("edit", query.folder);
  }

  return res.redirect("/");
}

export { homeGet, homePost };

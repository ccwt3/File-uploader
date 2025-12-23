import * as folderFC from "../functions/folderFunctions.ts";

async function homeGet(req, res) {
  // verify the user is logged
  if (!req.user) {
    return res.redirect("/register");
  } else if (!Number.isNaN(req.params.folderId) && req.params.folderId) {
    const parentId = Number.parseInt(req.params.folderId);
    const folders = await folderFC.getFolderChildren(
      req.user.id,
      parentId
    );
    
    return res.render("home", {
      user: req.user,
      err: [req.flash("folder") || null],
      folders: folders.children,
      currentFolder: folders.parent,
    });
  }
  const folders = await folderFC.getAllFolders(req.user.id);

  return res.render("home", {
    user: req.user, // use users id and username
    err: [req.flash("folder") || null], // send a message if any error
    folders: folders, // send all the folders of the user
    currentFolder: {folderName: null, id: null},
  });
}

async function homePost(req, res) {
  // verify if the user is logged
  if (!req.user) {
    return res.redirect("/register");
  }

  if (req.query.action === "create") {
    // if the user sends to create a folder it does it
    const folderName = req.body.folderName;
    const id = req.user.id;
    let folder;

    if (req.query.folder) {
      folder = await folderFC.createChildrenFolder(
        id,
        folderName,
        Number.parseInt(req.query.folder)
      );
    } else {
      folder = await folderFC.createInitialFolder(folderName, id);
    }

    if (folder && folder !== 1) {
      console.log(folder);
      return res.redirect("/");
    } else if (folder === 1) {
      req.flash("parent does not exist");
    } else {
      req.flash("folder", "Two folders can't have the same name");
    }
  }

  return res.redirect("/");
}

export { homeGet, homePost };

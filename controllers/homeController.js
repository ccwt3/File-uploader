import * as folderFC from "../functions/folderFunctions.ts";

async function homeGet(req, res) {
  // verify the user is logged
  if (!req.user) {
    return res.redirect("/register");
  } else if (req.query.folder) {
    const children = await folderFC.getFolderChildren(
      req.user.id,
      req.query.folder
    );

    return res.render("home", {
      user: req.user,
      err: [req.flash("folder") || null],
      folders: children,
      currentFolder: req.query.folder,
    });
  }

  const folders = await folderFC.getAllFolders(req.user.id);

  return res.render("home", {
    user: req.user, // use users id and username
    err: [req.flash("folder") || null], // send a message if any error
    folders: folders, // send all the folders of the user
    currentFolder: null,
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
        req.query.folder
      );
    } else {
      folder = await folderFC.createInitialFolder(folderName, id, null);
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

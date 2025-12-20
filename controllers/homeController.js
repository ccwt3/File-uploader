import createFolder from "../models/createFolder.ts";
import getFolders from "../models/getFolders.ts"

async function homeGet(req, res) {
  if (!req.user) {
    return res.redirect("/register");
  }

  const folders = await getFolders(req.user.id);

  return res.render("home", { 
    user: req.user, 
    err: [req.flash("folder") || null],
    folders: folders,
  });
}

async function homePost(req, res) {
  if (!req.user) {
    return res.redirect("/register");
  }

  if (req.query.action === "create") {
    const folderName = req.body.folderName;
    const id = req.user.id;
    const folder = await createFolder(folderName, id);

    if (folder) {
      console.log(folder);
      return res.redirect("/");
    } else {
      req.flash("folder", "Two folders can't have the same name");
      return res.redirect("/"); 
    }
  }

  return res.send("nada we");
}

export { homeGet, homePost };

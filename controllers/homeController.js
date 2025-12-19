import createFolder from "../models/createFolder.ts";

function homeGet(req, res) {
  if (!req.user) {
    return res.redirect("/register");
  }
  return res.render("home", { user: req.user, err: [req.flash("folder") || null] });
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
      res.redirect("/"); 
    }
  }
}

export { homeGet, homePost };

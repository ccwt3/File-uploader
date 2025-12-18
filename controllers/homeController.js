function sataAndaki(req, res) {
  res.send("sata andaki");
}

function homeGet(req, res) {
  if (!req.user) {
    return res.redirect("/register");
  }
  return res.render("home", { user: req.user });
}

export { sataAndaki, homeGet };

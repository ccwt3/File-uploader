function sataAndaki(req, res) {
  res.send("sata andaki");
}

function homeGet(req, res) {
  res.render("home");
}

export {
  sataAndaki,
  homeGet
};
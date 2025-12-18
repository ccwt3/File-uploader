import passport from "passport";

function loginGet(req, res) {
  if (req.user) {
    return res.redirect("/");
  }
  res.render("login", { err: [req.flash("error") || null] });
}

const loginPost = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
});

export { loginGet, loginPost };

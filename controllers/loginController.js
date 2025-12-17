import passport from "passport";

function loginGet(req, res) {
  if (req.user) {
    return res.redirect("/");
  }

  res.render("login");
}

const loginPost = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
});

export { loginGet, loginPost };

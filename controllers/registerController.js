import registerFunction from "../middleware/auth/register";

function registerGet(req, res) {
  res.render("register", {error: null});
}

async function registerPost(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const operation = await registerFunction(username, password);

  if (operation) {
    res.redirect("/login");
  } else {
    res.render("register", { error: "username already taken" });
  }
}

export { registerGet, registerPost };

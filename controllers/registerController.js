import registerFunction from "../middleware/auth/register";

function registerGet(req, res) {
  res.render("register");
}

async function registerPost(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const operation = await registerFunction(username, password);

  if (operation === true) {
    res.redirect("/login");
  } else {
    //todo Error handling
    throw new operation();
  }
}

export { registerGet, registerPost };

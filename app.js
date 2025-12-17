// librarys
import express from "express";
import path from "path";
const __dirname = import.meta.dirname;
import passport from "passport";

// modules
import homeRouter from "./routes/homeRouter.js";
import loginRouter from "./routes/loginRouter.js";
import registerRouter from "./routes/registerRouter.js";
import session from "./middleware/auth/sessionConfig.js";
import passportAuth from "./middleware/auth/passportAuth.js";
import * as serial from "./middleware/auth/serial.js";

// app start
const app = express();
const PORT = 3000;

// config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// session and passport middleware
app.use(session);
app.use(express.urlencoded({ extended: true }));
app.use(passport.authenticate("session"));

passport.use(passportAuth);
passport.serializeUser(serial.serialize);
passport.deserializeUser(serial.deserialize);

// routes middleware
app.use("/", homeRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

// catching error middleware
app.use((err, req, res, next) => {
  res.render("errors", {message: err.message});
});

// app listening
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.error(err);
    console.log("running 3000");
  }
});

// librarys
import express from "express";
import path from "path";
const __dirname = import.meta.dirname;

//todo Passport libs
import passport from "passport";

// modules
import homeRouter from "./routes/homeRouter.js";
import loginRouter from "./routes/loginRouter.js";
import registerRouter from "./routes/registerRouter.js";
import session from "./middleware/auth/sessionConfig.js";
import login from "./models/credentialManagement/login.js";
import * as serial from "./models/credentialManagement/serial.js";

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

passport.use(login);
passport.serializeUser(serial.serialize);
passport.deserializeUser(serial.deserialize);

// routes middleware
app.use("/", homeRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

// catching error middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("esta mal");
});

// app listening
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("running 3000");
  }
});

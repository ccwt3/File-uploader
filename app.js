// librarys
import express from "express";
import path from "path";
const __dirname = import.meta.dirname;

// modules
import homeRouter from "./routes/homeRouter.js";

// app start
const app = express();
const PORT = 3000;

// config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// routes middleware
app.get("/", homeRouter);

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

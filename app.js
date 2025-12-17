// librarys
import express from "express";
import path from "path";
const __dirname = import.meta.dirname;
import session from "express-session";
import "dotenv/config";

import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import prisma from "./prisma/lib/prisma.ts";

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

// session middleware
app.use(
  session({
    cookie: {
      maxAge: 5 * 60 * 1000,
    },
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(
      prisma, {
        checkPeriod: 2 * 60 * 1000,
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
      }
    )
  })
);

app.use(express.urlencoded({ extended: true }));

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

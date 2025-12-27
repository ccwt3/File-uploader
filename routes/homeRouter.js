import express from "express";
import * as homeController from "../controllers/homeController.js";
const homeRouter = express.Router();

import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, res, done) {
    done(null, "./uploads");
  },
  filename: function (req, res, done) {
    done(null, Date.now() + ".jpg");
  },
});

const upload = multer({ storage: storage });

homeRouter.get("/{folder/:folderId}", homeController.homeGet);
homeRouter.post("/", homeController.homePost);

homeRouter.post("/upload", upload.single("uploadedFile"), (req, res) => {
  console.log(req.file, req.body);
  res.redirect("/");
});

export default homeRouter;

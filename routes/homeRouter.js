import express from "express";
import * as homeController from "../controllers/homeController.js";
const homeRouter = express.Router();

homeRouter.get("/{folder/:folderId}", homeController.homeGet);
homeRouter.post("/", homeController.homePost);

export default homeRouter;

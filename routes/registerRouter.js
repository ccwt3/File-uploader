import express from "express";
const registerRouter = express.Router();
import * as registerController from "../controllers/registerController"

registerRouter.get("/", registerController.registerGet);
registerRouter.post("/", registerController.registerPost);

export default registerRouter;